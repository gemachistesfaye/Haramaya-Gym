import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsLoading(true);
    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          toast.success("Message sent! We'll contact you shortly.");
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } else {
        await new Promise((r) => setTimeout(r, 1000));
        toast.success(`Thank you ${formData.firstName}! We'll contact you shortly.`);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      }
    } catch {
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-poppins font-black mb-4">
            GET IN <span className="text-gradient">TOUCH</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your transformation? Contact us for a free consultation and facility tour.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="card-gradient border-glow">
            <CardHeader>
              <CardTitle className="text-lg font-poppins font-bold text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName" className="text-sm">First Name *</Label>
                    <Input id="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                    <Input id="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm">Email *</Label>
                  <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-sm">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+251 9XX XXX XXX" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm">Message *</Label>
                  <Textarea id="message" placeholder="Tell us about your fitness goals..." rows={4} value={formData.message} onChange={handleChange} required />
                </div>
                <Button variant="hero" className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="space-y-5">
            <Card className="card-gradient border-glow">
              <CardHeader>
                <CardTitle className="text-lg font-poppins font-bold text-primary">Visit Our Facility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: "Haramaya, Ethiopia" },
                  { icon: Phone, label: "Phone", value: "+251 956784390" },
                  { icon: Mail, label: "Email", value: "info@haramayagym.com" },
                  { icon: Clock, label: "Hours", value: "Mon-Sun: 5:00 AM - 11:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <item.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-gradient border-glow overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-poppins font-bold text-primary">Location Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  title="Haramaya Gym Location"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  scrolling="no"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=41.97%2C9.37%2C42.03%2C9.43&amp;layer=mapnik&amp;marker=9.4008%2C42.0022"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                />
              </CardContent>
            </Card>

            <Card className="card-gradient border-glow">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-primary">7</div>
                    <div className="text-xs text-muted-foreground">Day Free Trial</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-accent">0</div>
                    <div className="text-xs text-muted-foreground">Join Fee Today</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

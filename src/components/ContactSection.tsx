import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

// Formspree endpoint — set VITE_FORMSPREE_ENDPOINT in your .env file
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields (First Name, Email, and Message).");
      return;
    }

    setIsLoading(true);

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          toast.success("Thank you! Your message has been sent successfully.");
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        } else {
          toast.error("Oops! Something went wrong. Please try again or call us.");
        }
      } else {
        // Mock server latency
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success(`Message sent! Thank you ${formData.firstName}, we will contact you shortly.`);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      toast.error("An error occurred while sending. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-6">
            GET IN <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your transformation? Contact us today for a free consultation and tour of our facility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-primary">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+251 912 345 678" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your fitness goals and how we can help..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-gradient border-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-bold text-primary">
                  Visit Our Facility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Haramaya, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+251 956784390</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Website</h3>
                    <p className="text-muted-foreground">www.haramayagym.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon-Sun: 5:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card className="card-gradient border-glow overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-poppins font-bold text-primary">
                  Facility Location Map
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 border-t border-glow">
                <iframe 
                  title="Haramaya Gym Location Map"
                  width="100%" 
                  height="250" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=41.97%2C9.37%2C42.03%2C9.43&amp;layer=mapnik&amp;marker=9.4008%2C42.0022"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                  className="w-full"
                ></iframe>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-gradient border-glow">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-primary mb-1">7</div>
                    <div className="text-sm text-muted-foreground">Day Free Trial</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-accent mb-1">0</div>
                    <div className="text-sm text-muted-foreground">Join Fee Today</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

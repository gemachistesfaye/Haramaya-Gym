import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import ServiceDetailDialog from "@/components/dialogs/ServiceDetailDialog";
import type { Service } from "@/data/services";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-5">
            OUR <span className="text-gradient">SERVICES</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals faster and more effectively.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="card-gradient border-glow overflow-hidden group scale-hover flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-poppins font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed flex-1">{service.shortDescription}</p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" size="lg" className="w-full" onClick={() => handleLearnMore(service)}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-black mb-4">
            Not Sure Which <span className="text-gradient">Service</span> Is Right?
          </h2>
          <p className="text-base text-muted-foreground mb-8">
            Contact us for a free consultation. We'll help you find the perfect program for your goals.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="px-10 text-lg">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <ServiceDetailDialog service={selectedService} open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default ServicesPage;

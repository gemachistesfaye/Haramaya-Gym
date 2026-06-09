import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Check, Users, Dumbbell, Award, Clock } from "lucide-react";
import heroImage from "@/assets/haramaya-hero.png";
import { services } from "@/data/services";

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Access" },
  { icon: Dumbbell, value: "15", label: "Expert Trainers" },
];

const testimonials = [
  { name: "Sarah Johnson", role: "Marketing Executive", content: "Haramaya Gym completely transformed my approach to wellness. The trainers are incredibly knowledgeable and the community is so supportive.", rating: 5 },
  { name: "Michael Chen", role: "Software Engineer", content: "The 24/7 access is perfect for my schedule. The equipment is top-notch and always clean. This place has become my second home.", rating: 5 },
  { name: "Emma Rodriguez", role: "Teacher", content: "I was intimidated by gyms before, but Haramaya Gym made me feel welcome from day one. The group classes are amazing.", rating: 5 },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black mb-4 leading-tight">
              <span className="text-foreground">START</span>{" "}
              <span className="text-gradient">TRAINING</span>{" "}
              <span className="text-foreground">NOW</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Unleash your strength at Haramaya Gym. Top-quality equipment, expert trainers, and an empowering environment in Haramaya, Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link to="/pricing">
                <Button variant="hero" size="lg" className="text-sm px-8">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="glass" size="lg" className="text-sm px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-1.5"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-poppins font-black mb-3">
              <span className="text-gradient">ABOUT</span> HARAMAYA GYM
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Where champions are forged and limits are shattered. State-of-the-art facility with cutting-edge equipment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-poppins font-bold text-primary">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe everyone has the potential to achieve greatness. Our mission is to provide the tools, knowledge, and support to transform your body and lifestyle.
              </p>
              <ul className="space-y-2">
                {["15,000+ sq ft of premium equipment", "Certified expert trainers", "Personalized workout plans", "24/7 access"].map((f, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="card-gradient border-glow p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/about">
              <Button variant="ghost" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-poppins font-black mb-3">
              OUR <span className="text-gradient">SERVICES</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fitness solutions to help you achieve your goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} className="card-gradient border-glow overflow-hidden group scale-hover">
                <div className="relative h-36 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-poppins font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{service.shortDescription}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="text-xs text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="cta" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-poppins font-black mb-3">
              MEMBER <span className="text-gradient">STORIES</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="card-gradient border-glow p-5">
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-black mb-3">
            Ready to <span className="text-gradient">Transform</span>?
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Start your 7-day free trial today. No commitment, no join fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/pricing">
              <Button variant="hero" size="lg" className="px-8">
                View Plans
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="lg" className="px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

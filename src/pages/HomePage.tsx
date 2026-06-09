import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Check, Users, Dumbbell, Award, Clock, Calendar, Flame, TrendingUp, MapPin } from "lucide-react";
import heroImage from "@/assets/haramaya-hero.png";
import { services } from "@/data/services";

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Access" },
  { icon: Dumbbell, value: "15", label: "Expert Trainers" },
];

const schedule = [
  { time: "6:00 AM", mon: "Morning Burn", tue: "Strength", wed: "HIIT", thu: "Cardio", fri: "Power", sat: "Open Gym", sun: "Rest" },
  { time: "8:00 AM", mon: "Yoga", tue: "Core", wed: "Spin", thu: "Yoga", fri: "Core", sat: "Group HIIT", sun: "Yoga" },
  { time: "5:00 PM", mon: "CrossFit", tue: "Boxing", wed: "CrossFit", thu: "Boxing", fri: "CrossFit", sat: "—", sun: "—" },
  { time: "7:00 PM", mon: "Strength", tue: "HIIT", wed: "Strength", thu: "HIIT", fri: "Strength", sat: "—", sun: "—" },
];

const testimonials = [
  { name: "Sarah Johnson", role: "Marketing Executive", content: "Haramaya Gym completely transformed my approach to wellness. The trainers are incredibly knowledgeable and the community is so supportive.", rating: 5 },
  { name: "Michael Chen", role: "Software Engineer", content: "The 24/7 access is perfect for my schedule. The equipment is top-notch and always clean. This place has become my second home.", rating: 5 },
  { name: "Emma Rodriguez", role: "Teacher", content: "I was intimidated by gyms before, but Haramaya Gym made me feel welcome from day one. The group classes are amazing.", rating: 5 },
  { name: "David Thompson", role: "Business Owner", content: "The personal training program helped me achieve goals I never thought possible. Professional and results-driven.", rating: 5 },
  { name: "Lisa Park", role: "Nurse", content: "Lost 30lbs and gained confidence. The nutrition coaching was a game-changer for me!", rating: 5 },
  { name: "James Wilson", role: "Retired Veteran", content: "At 55, I'm in the best shape of my life. The staff treats everyone like family.", rating: 5 },
];

const whyChooseUs = [
  { icon: Flame, title: "Premium Equipment", description: "Over 200+ pieces of state-of-the-art machines and free weights from top brands." },
  { icon: TrendingUp, title: "Proven Results", description: "98% of our members reach their goals within the first 3 months of joining." },
  { icon: Users, title: "Expert Trainers", description: "15+ certified trainers with 10+ years of experience in various specialties." },
  { icon: Clock, title: "24/7 Access", description: "Train anytime that fits your schedule. We never close." },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 shimmer-bg opacity-30" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-4 leading-tight">
              <span className="text-foreground">START</span>{" "}
              <span className="text-gradient">TRAINING</span>{" "}
              <span className="text-foreground">NOW</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 max-w-2xl mx-auto leading-relaxed">
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
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-xl font-black text-primary mb-0.5">{stat.value}</div>
              <div className="text-[11px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-poppins font-black mb-2">
              <span className="text-gradient">ABOUT</span> HARAMAYA GYM
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Where champions are forged and limits are shattered. State-of-the-art facility with cutting-edge equipment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h3 className="text-lg font-poppins font-bold text-primary">Our Mission</h3>
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
            <Card className="card-gradient border-glow p-5">
              <div className="grid grid-cols-2 gap-4 text-center">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl font-black text-primary">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="text-center mt-6">
            <Link to="/about">
              <Button variant="ghost" className="group text-sm">
                Learn More About Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Why Choose Us */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-poppins font-black mb-2">
              WHY <span className="text-gradient">CHOOSE US</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We deliver results. Here's what sets us apart from the rest.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => (
              <Card key={i} className="card-gradient border-glow p-5 text-center scale-hover group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-poppins font-bold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-poppins font-black mb-2">
              OUR <span className="text-gradient">SERVICES</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Comprehensive fitness solutions to help you achieve your goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} className="card-gradient border-glow overflow-hidden group scale-hover">
                <div className="relative h-32 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-base font-poppins font-bold text-primary mb-1.5">{service.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2.5 leading-relaxed">{service.shortDescription}</p>
                  <ul className="space-y-1 mb-3">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-[11px] text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/services">
              <Button variant="cta" className="group text-sm">
                View All Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Schedule */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-poppins font-black mb-2">
              CLASS <span className="text-gradient">SCHEDULE</span>
            </h2>
            <p className="text-sm text-muted-foreground">Weekly group class timetable</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2.5 px-3 font-poppins font-semibold text-muted-foreground">Time</th>
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <th key={d} className="text-center py-2.5 px-2 font-poppins font-semibold text-foreground">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-3 font-medium text-primary">{row.time}</td>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat, row.sun].map((cls, j) => (
                      <td key={j} className="text-center py-2.5 px-2 text-muted-foreground">
                        {cls === "—" ? (
                          <span className="text-border">—</span>
                        ) : (
                          <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[10px]">{cls}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4">
            <Link to="/services">
              <Button variant="ghost" className="text-xs group">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                View Full Schedule
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-poppins font-black mb-2">
              MEMBER <span className="text-gradient">STORIES</span>
            </h2>
            <div className="flex items-center justify-center space-x-1.5 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-semibold text-foreground">4.9/5</span>
              <span className="text-xs text-muted-foreground">from 500+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Card key={i} className="card-gradient border-glow p-4 scale-hover">
                <div className="flex mb-2">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs text-foreground mb-3 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-[10px]">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">{t.name}</div>
                    <div className="text-[10px] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Location */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-poppins font-black mb-2">
              FIND <span className="text-gradient">US</span>
            </h2>
            <p className="text-sm text-muted-foreground">Conveniently located in Haramaya, Ethiopia</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <Card className="card-gradient border-glow overflow-hidden">
              <iframe
                title="Haramaya Gym Location"
                width="100%"
                height="250"
                frameBorder="0"
                scrolling="no"
                src="https://www.openstreetmap.org/export/embed.html?bbox=41.97%2C9.37%2C42.03%2C9.43&amp;layer=mapnik&amp;marker=9.4008%2C42.0022"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              />
            </Card>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Location", value: "Haramaya, Ethiopia" },
                { icon: Clock, label: "Hours", value: "Mon-Sun: 5:00 AM - 11:00 PM" },
                { icon: Dumbbell, label: "Facility", value: "15,000+ sq ft premium space" },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <Link to="/contact">
                <Button variant="hero" size="sm" className="w-full mt-2 text-xs">
                  Get Directions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-black mb-2">
            Ready to <span className="text-gradient">Transform</span>?
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Start your 7-day free trial today. No commitment, no join fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/pricing">
              <Button variant="hero" size="lg" className="px-8 text-sm">
                View Plans
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="lg" className="px-8 text-sm">
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

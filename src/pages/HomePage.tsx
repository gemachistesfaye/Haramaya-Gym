import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Check, Users, Dumbbell, Award, Clock, Calendar, Flame, TrendingUp, MapPin } from "lucide-react";
import heroImage from "@/assets/haramaya-hero.png";
import { services } from "@/data/services";

const stats = [
  { icon: Users, value: "120+", label: "Active Members" },
  { icon: Award, value: "95%", label: "Satisfaction Rate" },
  { icon: Clock, value: "24/7", label: "Access" },
  { icon: Dumbbell, value: "8", label: "Expert Trainers" },
];

const schedule = [
  { time: "6:00 AM", mon: "Morning Burn", tue: "Strength", wed: "HIIT", thu: "Cardio", fri: "Power", sat: "Open Gym", sun: "Rest" },
  { time: "8:00 AM", mon: "Yoga", tue: "Core", wed: "Spin", thu: "Yoga", fri: "Core", sat: "Group HIIT", sun: "Yoga" },
  { time: "5:00 PM", mon: "CrossFit", tue: "Boxing", wed: "CrossFit", thu: "Boxing", fri: "CrossFit", sat: "—", sun: "—" },
  { time: "7:00 PM", mon: "Strength", tue: "HIIT", wed: "Strength", thu: "HIIT", fri: "Strength", sat: "—", sun: "—" },
];

const testimonials = [
  { name: "Hana Tesfaye", role: "University Student", content: "Haramaya Gym completely changed my life. The trainers are so supportive and the community keeps me motivated.", rating: 5 },
  { name: "Dawit Mulugeta", role: "Software Engineer", content: "The 24/7 access fits my schedule perfectly. Equipment is top-notch and always clean.", rating: 5 },
  { name: "Fatuma Ahmed", role: "Teacher", content: "I was nervous about joining, but Haramaya Gym made me feel welcome from day one. The group classes are amazing.", rating: 5 },
  { name: "Yonas Bekele", role: "Business Owner", content: "The personal training program helped me achieve goals I never thought possible. Professional and results-driven.", rating: 5 },
  { name: "Meron Alemayehu", role: "Nurse", content: "Incredible facility with real results. I gained so much confidence and the nutrition coaching was a game-changer!", rating: 5 },
  { name: "Abebe Demissie", role: "Engineer", content: "At 52, I'm in the best shape of my life. The staff treats everyone like family.", rating: 5 },
];

const whyChooseUs = [
  { icon: Flame, title: "Premium Equipment", description: "Over 100+ pieces of state-of-the-art machines and free weights from top brands." },
  { icon: TrendingUp, title: "Proven Results", description: "95% of our members reach their goals within the first 3 months of joining." },
  { icon: Users, title: "Expert Trainers", description: "8 certified trainers with years of experience in various specialties." },
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
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins font-black mb-6 leading-tight">
              <span className="text-foreground">START</span>{" "}
              <span className="text-gradient">TRAINING</span>{" "}
              <span className="text-foreground">NOW</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Unleash your strength at Haramaya Gym. Top-quality equipment, expert trainers, and an empowering environment in Haramaya, Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/pricing">
                <Button variant="hero" size="xl" className="text-lg px-10">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="glass" size="xl" className="text-lg px-10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-black mb-3 sm:mb-4">
              <span className="text-gradient">ABOUT</span> HARAMAYA GYM
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Where champions are forged and limits are shattered. State-of-the-art facility with cutting-edge equipment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-poppins font-bold text-primary">Our Mission</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe everyone has the potential to achieve greatness. Our mission is to provide the tools, knowledge, and support to transform your body and lifestyle.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {["5,000+ sq ft of premium equipment", "Certified expert trainers", "Personalized workout plans", "24/7 access"].map((f, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm sm:text-base text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="card-gradient border-glow p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-black text-primary">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link to="/about">
              <Button variant="ghost" className="group text-sm sm:text-base">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Why Choose Us */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-black mb-3 sm:mb-4">
              WHY <span className="text-gradient">CHOOSE US</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              We deliver results. Here's what sets us apart from the rest.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUs.map((item, i) => (
              <Card key={i} className="card-gradient border-glow p-4 sm:p-6 text-center scale-hover group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-sm sm:text-lg font-poppins font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-black mb-3 sm:mb-4">
              OUR <span className="text-gradient">SERVICES</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Comprehensive fitness solutions to help you achieve your goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} className="card-gradient border-glow overflow-hidden group scale-hover">
                <div className="relative h-36 sm:h-44 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-poppins font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">{service.shortDescription}</p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link to="/services">
              <Button variant="cta" className="group text-sm sm:text-base">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Schedule */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-black mb-3 sm:mb-4">
              CLASS <span className="text-gradient">SCHEDULE</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">Weekly group class timetable</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-poppins font-semibold text-muted-foreground">Time</th>
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <th key={d} className="text-center py-2 sm:py-3 px-2 sm:px-3 font-poppins font-semibold text-foreground">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-primary">{row.time}</td>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat, row.sun].map((cls, j) => (
                      <td key={j} className="text-center py-2 sm:py-3 px-2 sm:px-3 text-muted-foreground">
                        {cls === "—" ? (
                          <span className="text-border">—</span>
                        ) : (
                          <span className="bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">{cls}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4 sm:mt-6">
            <Link to="/services">
              <Button variant="ghost" className="text-xs sm:text-sm group">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
                View Full Schedule
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-black mb-3 sm:mb-4">
              MEMBER <span className="text-gradient">STORIES</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mt-2 sm:mt-3">
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm sm:text-base font-semibold text-foreground">4.8/5</span>
              <span className="text-xs sm:text-sm text-muted-foreground">from 120+ reviews</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <Card key={i} className="card-gradient border-glow p-4 sm:p-6 scale-hover">
                <div className="flex mb-2 sm:mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-foreground mb-3 sm:mb-4 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Location */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-black mb-3 sm:mb-4">
              FIND <span className="text-gradient">US</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">Conveniently located in Haramaya, Ethiopia</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <Card className="card-gradient border-glow overflow-hidden">
              <iframe
                title="Haramaya Gym Location"
                width="100%"
                height="220"
                frameBorder="0"
                scrolling="no"
                src="https://www.openstreetmap.org/export/embed.html?bbox=41.97%2C9.37%2C42.03%2C9.43&amp;layer=mapnik&amp;marker=9.4008%2C42.0022"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              />
            </Card>
            <div className="space-y-4 sm:space-y-5">
              {[
                { icon: MapPin, label: "Location", value: "Haramaya, Ethiopia" },
                { icon: Clock, label: "Hours", value: "Mon-Sun: 5:00 AM - 11:00 PM" },
                { icon: Dumbbell, label: "Facility", value: "5,000+ sq ft premium space" },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <Link to="/contact">
                <Button variant="hero" className="w-full mt-3 text-sm sm:text-base">
                  Get Directions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-black mb-3 sm:mb-4">
            Ready to <span className="text-gradient">Transform</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">
            Start your 7-day free trial today. No commitment, no join fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="hero" size="lg" className="px-8 sm:px-10 text-sm sm:text-lg w-full sm:w-auto">
                View Plans
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="lg" className="px-8 sm:px-10 text-sm sm:text-lg w-full sm:w-auto">
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

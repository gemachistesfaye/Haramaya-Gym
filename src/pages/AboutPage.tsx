import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Dumbbell, Heart, Target, Shield, Zap, ArrowRight, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Access Hours" },
  { icon: Dumbbell, value: "15+", label: "Expert Trainers" },
];

const values = [
  { icon: Target, title: "Goal-Oriented", description: "Every program is designed to move you closer to your specific fitness goals." },
  { icon: Heart, title: "Community First", description: "We foster a supportive environment where everyone feels welcome and motivated." },
  { icon: Shield, title: "Safety & Quality", description: "Premium equipment, certified trainers, and strict safety standards at all times." },
  { icon: Zap, title: "Results Driven", description: "Our proven methods and tracking systems ensure measurable progress." },
];

const team = [
  { name: "Coach Abebe", role: "Head Trainer", specialty: "Strength & Conditioning", experience: "12+ years" },
  { name: "Coach Fatima", role: "Fitness Director", specialty: "Group Classes & HIIT", experience: "8+ years" },
  { name: "Coach Daniel", role: "Nutrition Specialist", specialty: "Meal Planning & Body Composition", experience: "10+ years" },
  { name: "Coach Sara", role: "Yoga & Recovery", specialty: "Flexibility & Mental Wellness", experience: "6+ years" },
];

const timeline = [
  { year: "2018", title: "Founded", description: "Haramaya Gym opened its doors with a vision to transform fitness in the region." },
  { year: "2020", title: "Expansion", description: "Expanded to 15,000+ sq ft with new equipment and recovery center." },
  { year: "2022", title: "500 Members", description: "Reached 500 active members milestone. Launched online coaching." },
  { year: "2024", title: "Community Hub", description: "Recognized as the leading fitness community in Haramaya." },
];

const facilities = [
  { name: "Premium Weight Room", desc: "Over 100 machines and free weight stations" },
  { name: "Cardio Zone", desc: "Treadmills, bikes, rowers with personal screens" },
  { name: "Group Fitness Studio", desc: "Spacious studio for classes and workshops" },
  { name: "Recovery Center", desc: "Sauna, massage, and stretching area" },
  { name: "Nutrition Bar", desc: "Fresh smoothies and healthy snacks" },
  { name: "Private Lockers", desc: "Secure personal lockers with shower access" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-poppins font-black mb-3">
            ABOUT <span className="text-gradient">HARAMAYA GYM</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Located in Haramaya, Ethiopia, our state-of-the-art facility combines cutting-edge equipment with proven training methods.
          </p>
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

      {/* Mission */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-poppins font-bold text-primary">Our Mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Haramaya Gym, we believe everyone has the potential to achieve greatness. Our mission is to provide the tools, knowledge, and support to transform not just your body, but your entire lifestyle.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are committed to creating a space where fitness is accessible, enjoyable, and results-driven.
            </p>
            <ul className="space-y-2">
              {["15,000+ sq ft of premium equipment", "Certified expert trainers with 10+ years experience", "Personalized workout and nutrition plans", "24/7 access for ultimate flexibility"].map((f, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="card-gradient border-glow p-5">
            <h3 className="text-lg font-poppins font-bold text-center text-accent mb-4">What Sets Us Apart</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-black text-primary">{stat.value}</div>
                  <div className="text-[11px] text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Timeline */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-center mb-8">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-6">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.year}</span>
                  <h3 className="text-sm font-poppins font-bold text-foreground mt-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-center mb-8">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <Card key={i} className="card-gradient border-glow p-4 text-center scale-hover group">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2.5 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="text-sm font-poppins font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Team */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-center mb-8">
            Our <span className="text-gradient">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <Card key={i} className="card-gradient border-glow p-4 text-center scale-hover group">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                  {member.name.split(" ").pop()?.[0]}
                </div>
                <h3 className="text-sm font-poppins font-bold text-foreground">{member.name}</h3>
                <p className="text-[11px] text-primary mb-0.5">{member.role}</p>
                <p className="text-[10px] text-muted-foreground">{member.specialty}</p>
                <p className="text-[10px] text-accent font-medium mt-1">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-center mb-8">
            Our <span className="text-gradient">Facilities</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((f, i) => (
              <Card key={i} className="card-gradient border-glow p-4 scale-hover group">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Dumbbell className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-poppins font-bold text-foreground">{f.name}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-poppins font-black mb-2">
            Ready to <span className="text-gradient">Join Us</span>?
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Start your 7-day free trial and experience the Haramaya Gym difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/pricing">
              <Button variant="hero" size="lg" className="px-8 text-sm">
                View Plans
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="lg" className="px-8 text-sm group">
                Contact Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

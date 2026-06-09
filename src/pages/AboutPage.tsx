import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Dumbbell, Heart, Target, Shield, Zap } from "lucide-react";

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

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-poppins font-black mb-4">
            ABOUT <span className="text-gradient">HARAMAYA GYM</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Located in Haramaya, Ethiopia, our state-of-the-art facility combines cutting-edge equipment with proven training methods to deliver exceptional results.
          </p>
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

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-primary">Our Mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Haramaya Gym, we believe that everyone has the potential to achieve greatness. Our mission is to provide you with the tools, knowledge, and support needed to transform not just your body, but your entire lifestyle.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are committed to creating a space where fitness is accessible, enjoyable, and results-driven. From beginners to advanced athletes, our programs are designed to meet you where you are and take you where you want to go.
            </p>
            <ul className="space-y-2">
              {["15,000+ sq ft of premium equipment", "Certified expert trainers with 10+ years experience", "Personalized workout and nutrition plans", "24/7 access for ultimate flexibility", "Supportive community of fitness enthusiasts"].map((f, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="card-gradient border-glow p-6">
            <h3 className="text-xl font-poppins font-bold text-center text-accent mb-4">What Sets Us Apart</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-center mb-8">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Card key={i} className="card-gradient border-glow p-5 text-center scale-hover">
                <v.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-base font-poppins font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-center mb-8">
            Our <span className="text-gradient">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <Card key={i} className="card-gradient border-glow p-5 text-center scale-hover">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-3">
                  {member.name.split(" ").pop()?.[0]}
                </div>
                <h3 className="text-sm font-poppins font-bold text-foreground">{member.name}</h3>
                <p className="text-xs text-primary mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.specialty}</p>
                <p className="text-xs text-accent mt-1">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6">
            Our <span className="text-gradient">Facilities</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["Premium Weight Room", "Cardio Zone", "Group Fitness Studio", "Recovery & Wellness Center", "Nutrition Bar", "Private Lockers"].map((facility, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <Dumbbell className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

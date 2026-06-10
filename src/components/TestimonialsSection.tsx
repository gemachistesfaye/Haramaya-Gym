import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Hana Tesfaye",
      role: "University Student",
      content: "Haramaya Gym completely changed my life. The trainers are so supportive and the community keeps me motivated. I've never felt stronger!",
      rating: 5,
      image: "HT"
    },
    {
      name: "Dawit Mulugeta",
      role: "Software Engineer",
      content: "The 24/7 access fits my schedule perfectly. Equipment is top-notch and always clean. This place has become my second home.",
      rating: 5,
      image: "DM"
    },
    {
      name: "Fatuma Ahmed",
      role: "Teacher",
      content: "I was nervous about joining a gym, but Haramaya Gym made me feel welcome from day one. The group classes are amazing and I've made lifelong friends.",
      rating: 5,
      image: "FA"
    },
    {
      name: "Yonas Bekele",
      role: "Business Owner",
      content: "The personal training program helped me achieve goals I never thought possible. Professional, results-driven, and worth every birr.",
      rating: 5,
      image: "YB"
    },
    {
      name: "Meron Alemayehu",
      role: "Nurse",
      content: "Incredible facility with real results. I gained so much confidence and the nutrition coaching was a complete game-changer for me!",
      rating: 5,
      image: "MA"
    },
    {
      name: "Abebe Demissie",
      role: "Engineer",
      content: "At 52, I'm in the best shape of my life thanks to Haramaya Gym. The staff treats everyone like family and the atmosphere is incredible.",
      rating: 5,
      image: "AD"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-6">
            MEMBER <span className="text-gradient">STORIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real transformations from real people who chose to make a change at Haramaya Gym.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-gradient border-glow scale-hover">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Member Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.8/5</span>
            <span className="text-muted-foreground">from 120+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
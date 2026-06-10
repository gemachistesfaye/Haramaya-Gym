import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import personalTrainingImage from "@/assets/personal-training.jpg";
import groupClassesImage from "@/assets/group-classes.jpg";
import nutritionImage from "@/assets/nutrition.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
      image: personalTrainingImage,
      features: ["Customized workout plans", "Nutritional guidance", "Progress tracking", "Flexible scheduling"]
    },
    {
      title: "Body Building",
      description: "Specialized programs designed to build muscle mass and sculpt your physique with expert guidance.",
      image: groupClassesImage,
      features: ["Muscle building programs", "Competition prep", "Advanced techniques", "Progress monitoring"]
    },
    {
      title: "Group Classes",
      description: "High-energy group sessions that combine fitness with fun in a motivating community environment.",
      image: nutritionImage,
      features: ["HIIT workouts", "Strength training", "Cardio sessions", "Weight loss programs"]
    },
    {
      title: "Nutrition Classes",
      description: "Expert guidance on meal planning and nutrition strategies to complement your fitness journey.",
      image: personalTrainingImage,
      features: ["Meal planning", "Supplement advice", "Body composition analysis", "Weight management"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-6">
            OUR <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive fitness solutions designed to help you achieve your goals faster and more effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient border-glow overflow-hidden group scale-hover fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-bold text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="cta" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
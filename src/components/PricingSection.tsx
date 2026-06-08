import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "600 ETB",
      description: "Perfect for beginners starting their fitness journey",
      popular: false,
      features: [
        "24/7 gym access",
        "Basic equipment usage", 
        "Locker room access",
        "Free Wi-Fi",
        "Mobile app access"
      ]
    },
    {
      name: "Premium",
      price: "1,200 ETB",
      description: "Our most popular plan with comprehensive benefits", 
      popular: true,
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal training session (1/month)",
        "Nutrition consultation",
        "Recovery zone access",
        "Guest privileges (2/month)"
      ]
    },
    {
      name: "Elite",
      price: "2,500 ETB",
      description: "For serious athletes who demand the best",
      popular: false,
      features: [
        "Everything in Premium", 
        "Unlimited personal training",
        "Custom nutrition plan",
        "Body composition analysis",
        "Priority class booking",
        "Unlimited guest privileges",
        "Exclusive elite member events"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-6">
            MEMBERSHIP <span className="text-gradient">PLANS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your lifestyle and fitness goals. All memberships include no commitment options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden scale-hover ${
                plan.popular 
                  ? 'card-gradient border-primary/50 shadow-lg neon-glow scale-105' 
                  : 'card-gradient border-glow'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <CardHeader className={plan.popular ? "pt-12" : ""}>
                <CardTitle className="text-2xl font-poppins font-bold text-center">
                  {plan.name}
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-black text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-center text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "cta"} 
                  size="lg"
                  className="w-full"
                >
                  {plan.popular ? "Start Today" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 7-day free trial. Cancel anytime.
          </p>
          <Button variant="ghost" size="lg">
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
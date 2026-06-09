import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { plans } from "@/data/plans";
import { toast } from "sonner";

const PricingPage = () => {
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const handleChoosePlan = (plan: typeof plans[0]) => {
    toast.success(`Great choice! Starting your ${plan.name} plan free trial.`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-poppins font-black mb-4">
            MEMBERSHIP <span className="text-gradient">PLANS</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your lifestyle. All memberships include a 7-day free trial.
          </p>

          {/* Monthly/Annual Toggle */}
          <div className="flex items-center justify-center space-x-3">
            <span className={`text-sm font-medium transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch checked={annual} onCheckedChange={setAnnual} />
            <span className={`text-sm font-medium transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual
            </span>
            {annual && (
              <span className="text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {plans.map((plan) => {
            const price = annual && plan.annualPrice > 0 ? plan.annualPrice : plan.monthlyPrice;
            const isAnnual = annual && plan.annualPrice > 0;

            return (
              <Card
                key={plan.id}
                className={`relative overflow-hidden scale-hover ${
                  plan.popular
                    ? "card-gradient border-primary/50 shadow-lg neon-glow lg:scale-105"
                    : "card-gradient border-glow"
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1.5 text-xs font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className={`text-center ${plan.popular ? "pt-6" : "pt-5"}`}>
                  <CardTitle className="text-lg font-poppins font-bold">{plan.name}</CardTitle>
                  <div className="mt-1">
                    <span className="text-2xl font-black text-primary">{price.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground"> ETB/mo</span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-success font-medium">
                      Billed {(price * 12).toLocaleString()} ETB/year
                    </p>
                  )}
                  <CardDescription className="text-xs mt-1">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 px-4 pb-5">
                  <ul className="space-y-2">
                    {plan.features.slice(0, 5).map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        {f.included ? (
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
                        )}
                        <span className={`text-xs ${f.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                          {f.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "hero" : "cta"}
                    className="w-full"
                    size="sm"
                    onClick={() => handleChoosePlan(plan)}
                  >
                    {plan.popular ? "Start Today" : "Choose Plan"}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => {
                      setSelectedPlan(plan);
                      setDetailOpen(true);
                    }}
                  >
                    View All Features
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-center mb-8">
            Feature <span className="text-gradient">Comparison</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-poppins font-semibold text-foreground">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className={`text-center py-3 px-3 font-poppins font-semibold ${plan.popular ? "text-primary" : "text-foreground"}`}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["24/7 Gym Access", "Equipment Usage", "Locker Room", "Wi-Fi", "Group Classes", "Personal Training", "Nutrition Plan", "Recovery Zone", "Body Analysis", "Guest Passes"].map((feature, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 text-muted-foreground">{feature}</td>
                    {plans.map((plan) => {
                      const feat = plan.features.find((f) => f.name.toLowerCase().includes(feature.toLowerCase().split(" ").slice(-1)[0]));
                      const included = feat?.included ?? (i < 4 ? true : false);
                      return (
                        <td key={plan.id} className="text-center py-3 px-3">
                          {included ? (
                            <Check className="w-4 h-4 text-primary mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-center mb-8">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "Can I cancel anytime?", a: "Yes! All plans are month-to-month with no long-term commitment. Cancel anytime from your account." },
              { q: "Is there a join fee?", a: "No! Currently, there is zero join fee. You only pay for your monthly membership." },
              { q: "Can I switch plans?", a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
              { q: "What's included in the free trial?", a: "The 7-day free trial gives you full access to your chosen plan's features. No credit card required." },
            ].map((faq, i) => (
              <Card key={i} className="card-gradient border-glow p-5">
                <h3 className="text-sm font-poppins font-bold text-foreground mb-1">{faq.q}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Detail Dialog */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          {selectedPlan && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-poppins text-primary">
                  {selectedPlan.name} Plan
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedPlan.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2">
                <div className="text-center mb-4">
                  <span className="text-3xl font-black text-primary">
                    {(annual && selectedPlan.annualPrice > 0 ? selectedPlan.annualPrice : selectedPlan.monthlyPrice).toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground"> ETB/month</span>
                </div>
                <ul className="space-y-2.5">
                  {selectedPlan.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      {f.included ? (
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${f.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                        {f.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="hero" className="flex-1" onClick={() => {
                  handleChoosePlan(selectedPlan);
                  setDetailOpen(false);
                }}>
                  Start Free Trial
                </Button>
                <Button variant="ghost" onClick={() => setDetailOpen(false)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PricingPage;

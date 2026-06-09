import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceDetailDialogProps {
  service: Service | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceDetailDialog = ({ service, open, onOpenChange }: ServiceDetailDialogProps) => {
  const navigate = useNavigate();
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-poppins text-primary">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground leading-relaxed">
            {service.fullDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-3">
          <div>
            <h4 className="text-base font-semibold text-foreground mb-3">What's Included</h4>
            <ul className="space-y-2.5">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-foreground mb-3">Benefits</h4>
            <ul className="space-y-2.5">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <Button variant="hero" size="lg" className="flex-1" onClick={() => { onOpenChange(false); navigate("/contact"); }}>
            Book Now
          </Button>
          <Button variant="ghost" size="lg" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;

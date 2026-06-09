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
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-poppins text-primary">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground leading-relaxed">
            {service.fullDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">What's Included</h4>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Benefits</h4>
            <ul className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button variant="hero" className="flex-1" onClick={() => onOpenChange(false)}>
            Book Now
          </Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;

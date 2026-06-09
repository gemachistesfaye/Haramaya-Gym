import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleJoinSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Welcome! We'll contact you shortly to start your free trial.");
    setJoinDialogOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="bg-primary text-primary-foreground text-center text-sm py-1.5 font-medium">
          Welcome to Haramaya Gym - Premium fitness experience in Haramaya, Ethiopia!
        </div>
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <Dumbbell className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
            <span className="font-poppins font-bold text-xl text-foreground">
              HARAMAYA <span className="text-primary">GYM</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="hero"
              size="lg"
              onClick={() => setJoinDialogOpen(true)}
            >
              Join Now
            </Button>
          </div>

          <button
            className="md:hidden p-2.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="hero"
                size="lg"
                className="w-full mt-3"
                onClick={() => {
                  setMobileOpen(false);
                  setJoinDialogOpen(true);
                }}
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </header>

      <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-poppins text-primary">
              Start Your Free Trial
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Get 7 days free. No commitment required.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleJoinSubmit} className="space-y-5 mt-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="join-first" className="text-sm">First Name *</Label>
                <Input id="join-first" placeholder="First name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="join-last" className="text-sm">Last Name</Label>
                <Input id="join-last" placeholder="Last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="join-email" className="text-sm">Email *</Label>
              <Input id="join-email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="join-phone" className="text-sm">Phone</Label>
              <Input id="join-phone" type="tel" placeholder="+251 9XX XXX XXX" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Start 7-Day Free Trial
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavBar;

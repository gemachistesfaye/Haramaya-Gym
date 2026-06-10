import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-secondary/40 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-3">
              <Dumbbell className="h-5 w-5 text-primary" />
              <span className="font-poppins font-bold text-lg text-foreground">
                HARAMAYA <span className="text-primary">GYM</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Premium fitness experience in Haramaya, Ethiopia. Top-quality equipment and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-sm text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-sm text-foreground mb-3">Services</h4>
            <ul className="space-y-2">
              {["Personal Training", "Body Building", "Group Classes", "Nutrition Classes", "Recovery & Wellness"].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-sm text-foreground mb-3">Contact</h4>
            <div className="space-y-2.5">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Haramaya, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">0976601074</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@haramayagym.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Haramaya Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { Phone, Mail, Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-secondary/40 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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

          <div className="bg-secondary/60 p-5 rounded-xl border border-border/50 self-start">
            <h4 className="font-poppins font-semibold text-sm text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-primary"></span>
              Developer
            </h4>
            <div className="space-y-3">
              <a href="tel:+251976601074" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+251 97 660 1074</span>
              </a>
              <a href="mailto:gemachistesfaye36@gmail.com" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="truncate">gemachistesfaye36@gmail.com</span>
              </a>
              <a href="https://t.me/urjiiko1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                <span>Telegram Channel</span>
              </a>
              <a href="https://github.com/gemachistesfaye" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub Profile</span>
              </a>
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

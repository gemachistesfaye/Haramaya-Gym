import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bell } from "lucide-react";

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-sm py-1">
        <span>🏋️‍♂️ Welcome to Haramaya Gym – Premium fitness experience!</span>
      </div>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary-foreground transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A2 2 0 013 15.382V8.618a2 2 0 011.553-1.894L9 4m6 16l5.447-2.724A2 2 0 0021 15.382V8.618a2 2 0 00-1.553-1.894L15 4m-6 0v16"
            />
          </svg>
          <span className="font-bold text-lg">HARAMAYA GYM</span>
        </Link>
        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </li>
        </ul>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="block py-2 hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} className="block py-2 hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="block py-2 hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={() => window.location.hash = ''}
          >
            <img 
              src="/assets/007a26d4-9f60-4355-90ce-636d35494a06.png" 
              alt="Hex Nodes Logo" 
              className="w-8 h-8"
            />
            <div className="text-2xl font-bold">
              <span className="text-rainbow text-glow-rainbow">
                Hex Nodes
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => window.location.hash = ''}
            >
              Home
            </Link>
            <a href="/#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <Link to="/features" className="text-foreground hover:text-primary transition-colors">
              Server Features
            </Link>
            <Link to="/about-us" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
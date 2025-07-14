import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const supportLinks = [
    { label: "Server Status", href: "#" },
    { label: "24/7 Support", href: "https://discord.gg/R9yJ6vbPe9" }
  ];


  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <img 
                src="/assets/007a26d4-9f60-4355-90ce-636d35494a06.png" 
                alt="Hex Nodes Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-rainbow text-glow-rainbow">
                Hex Nodes
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Premium Minecraft server hosting with unmatched performance and reliability.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => window.open('https://discord.gg/R9yJ6vbPe9', '_blank')}
            >
              <MessageCircle size={16} />
              Discord
            </Button>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://discord.gg/R9yJ6vbPe9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  Discord Support
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hexnodes@outlook.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  hexnodes@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Hex Nodes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
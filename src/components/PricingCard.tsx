import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  paypalPrice: string;
  khaltiPrice: string;
  features: string[];
  isPopular?: boolean;
  color: "dirt" | "stone" | "iron" | "gold" | "diamond" | "netherite" | "redstone";
}

const PricingCard = ({ 
  name, 
  description, 
  price, 
  paypalPrice, 
  khaltiPrice, 
  features, 
  isPopular = false,
  color
}: PricingCardProps) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "dirt":
        return "hover:border-amber-600/50 hover:shadow-[0_0_30px_hsla(45,91%,55%,0.3)]";
      case "stone":
        return "hover:border-gray-400/50 hover:shadow-[0_0_30px_hsla(220,9%,46%,0.3)]";
      case "iron":
        return "hover:border-slate-400/50 hover:shadow-[0_0_30px_hsla(210,20%,60%,0.3)]";
      case "gold":
        return "hover:border-yellow-400/50 hover:shadow-[0_0_30px_hsla(51,95%,53%,0.3)]";
      case "diamond":
        return "hover:border-cyan-400/50 hover:shadow-[0_0_30px_hsla(189,94%,63%,0.3)]";
      case "netherite":
        return "hover:border-purple-400/50 hover:shadow-[0_0_30px_hsla(262,83%,63%,0.3)]";
      case "redstone":
        return "hover:border-red-400/50 hover:shadow-[0_0_30px_hsla(0,84%,60%,0.3)]";
      default:
        return "hover:border-primary/50 hover:shadow-glow-primary";
    }
  };

  return (
    <div className={`relative bg-gradient-card rounded-xl p-8 border border-border backdrop-blur-sm transition-all duration-300 transform hover:scale-105 ${getColorClasses(color)} ${isPopular ? 'ring-2 ring-primary/50' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mb-4">
          <div className="text-4xl font-bold text-primary mb-2">{price}</div>
          <div className="text-sm text-muted-foreground">
            {paypalPrice} PayPal / {khaltiPrice} Khalti
          </div>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-foreground">
            <Check className="text-secondary mr-3 flex-shrink-0" size={16} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => window.open('https://discord.gg/R9yJ6vbPe9', '_blank')}
      >
        Order {name}
      </Button>
    </div>
  );
};

export default PricingCard;
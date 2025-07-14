import PricingCard from "./PricingCard";

const Pricing = () => {
  const plans = [
    {
      name: "Dirt Plan",
      description: "Starter for small SMPs",
      price: "₹99/month",
      paypalPrice: "$1.50",
      khaltiPrice: "रू160",
      features: [
        "4 GB RAM",
        "2 Cores",
        "20 GB SSD Storage",
        "Basic Support",
        "DDoS Protection",
        "24/7 Uptime"
      ],
      color: "dirt" as const
    },
    {
      name: "Stone Plan",
      description: "Great for light plugins and vanilla",
      price: "₹179/month",
      paypalPrice: "$2.50",
      khaltiPrice: "रू290",
      features: [
        "6 GB RAM",
        "3 Cores",
        "40 GB SSD Storage",
        "Chat Support",
        "Plugin Support",
        "Automatic Backups"
      ],
      color: "stone" as const
    },
    {
      name: "Iron Plan",
      description: "Plugin and light modpack support",
      price: "₹249/month",
      paypalPrice: "$3.50",
      khaltiPrice: "रू400",
      features: [
        "8 GB RAM",
        "4 Cores",
        "60 GB SSD Storage",
        "Live Chat Support",
        "Modpack Support",
        "Priority Queue"
      ],
      color: "iron" as const
    },
    {
      name: "Gold Plan",
      description: "Mid-tier for small communities",
      price: "₹299/month",
      paypalPrice: "$4.50",
      khaltiPrice: "रू480",
      features: [
        "10 GB RAM",
        "5 Cores",
        "80 GB SSD Storage",
        "Priority Support",
        "Custom Plugins",
        "Advanced Monitoring"
      ],
      color: "gold" as const,
      isPopular: true
    },
    {
      name: "Diamond Plan",
      description: "Optimized for modded gameplay",
      price: "₹379/month",
      paypalPrice: "$5.50",
      khaltiPrice: "रू610",
      features: [
        "12 GB RAM",
        "6 Cores",
        "100 GB NVMe Storage",
        "Discord + Priority Support",
        "Heavy Modpack Support",
        "Dedicated Resources"
      ],
      color: "diamond" as const
    },
    {
      name: "Netherite Plan",
      description: "Smooth hosting for heavy packs",
      price: "₹499/month",
      paypalPrice: "$6.99",
      khaltiPrice: "रू800",
      features: [
        "16 GB RAM",
        "8 Cores",
        "120 GB NVMe Storage",
        "Premium Discord Support",
        "Enterprise Features",
        "Custom Configurations"
      ],
      color: "netherite" as const
    },
    {
      name: "Redstone Plan",
      description: "For creators and devs",
      price: "₹749/month",
      paypalPrice: "$10.99",
      khaltiPrice: "रू1,200",
      features: [
        "24 GB RAM",
        "10 Cores",
        "160 GB NVMe Storage",
        "Full Priority Support",
        "Development Tools",
        "Custom Configurations"
      ],
      color: "redstone" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All plans include premium features with no hidden fees. Start small and upgrade as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
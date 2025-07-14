import { Button } from "@/components/ui/button";

const PaymentMethods = () => {
  const paymentMethods = [
    {
      name: "UPI Only (No Bank Transfer)",
      logo: "/lovable-uploads/c5b6f6d2-3e21-442e-9458-1c2e6befba49.png",
      description: "UPI"
    },
    {
      name: "Khalti Only (No Bank Transfer)", 
      logo: "/lovable-uploads/851406b6-2b59-4595-ade6-be7820558333.png",
      description: "Khalti"
    },
    {
      name: "PayPal (Friends & Family Preferred)",
      logo: "/lovable-uploads/6c67e34e-94ce-4a0d-9f49-21f2a621e18e.png",
      description: "PayPal"
    }
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Payment Methods
        </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {paymentMethods.map((method) => (
              <div 
                key={method.name}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="h-16 mb-4 flex items-center justify-center">
                  <img 
                    src={method.logo} 
                    alt={method.description}
                    className="max-h-12 max-w-32 object-contain"
                  />
                </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {method.description}
              </h3>
              <p className="text-sm text-muted-foreground">
                {method.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Contact our team for enterprise pricing.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://discord.gg/R9yJ6vbPe9', '_blank')}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
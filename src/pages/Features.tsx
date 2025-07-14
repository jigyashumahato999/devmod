import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      title: "High Performance Hardware",
      description: "Latest generation CPUs and NVMe SSDs for maximum performance",
      icon: "⚡"
    },
    {
      title: "DDoS Protection",
      description: "Advanced protection against attacks to keep your server online",
      icon: "🛡️"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support via Discord and email",
      icon: "🎧"
    },
    {
      title: "Automatic Backups",
      description: "Daily automated backups to ensure your data is safe",
      icon: "💾"
    },
    {
      title: "Custom Plugins",
      description: "Support for custom plugins and modpacks",
      icon: "🔧"
    },
    {
      title: "99.9% Uptime",
      description: "Guaranteed uptime with redundant infrastructure",
      icon: "🌐"
    },
    {
      title: "Easy Control Panel",
      description: "User-friendly control panel for server management",
      icon: "🎮"
    },
    {
      title: "Fast Deployment",
      description: "Quick server setup and instant deployment",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Powerful Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run the perfect Minecraft server, from basic vanilla to complex modpacks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Features;
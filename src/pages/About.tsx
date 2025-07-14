import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "100+" },
    { label: "Servers Hosted", value: "200+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Support Response", value: "<5 min" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              About Hex Nodes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium Minecraft server hosting with unmatched performance and reliability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by passionate Minecraft enthusiasts, Hex Nodes was born from the frustration of poor server hosting experiences. We understood the pain of lag, downtime, and unresponsive support that plagued the Minecraft hosting industry.
                </p>
                <p>
                  Our mission is simple: provide the most reliable, high-performance Minecraft hosting with exceptional customer support. We use only the latest hardware and maintain our servers with the care and attention your projects deserve.
                </p>
                <p>
                  From small survival servers to massive modded networks, we've built our infrastructure to handle any Minecraft hosting challenge. Our team of experts is available 24/7 to ensure your server runs smoothly.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold mb-2 text-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of satisfied customers who trust Hex Nodes for their Minecraft hosting needs.
              </p>
              <Button 
                variant="default" 
                size="lg"
                onClick={() => window.open('https://discord.gg/R9yJ6vbPe9', '_blank')}
              >
                Join Our Discord
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
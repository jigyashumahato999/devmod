import { Button } from "@/components/ui/button";
import { Zap, Shield, Server } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-orange-400 to-secondary bg-clip-text text-transparent">
              Premium Minecraft
            </span>
            <br />
            <span className="text-foreground">Server Hosting</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience lag-free Minecraft gaming with our high-performance servers. 
            Built for creators, optimized for performance, backed by 24/7 support.
          </p>
          
          <Button 
            variant="gaming" 
            size="lg" 
            className="mb-16"
            onClick={() => window.open('https://discord.gg/R9yJ6vbPe9', '_blank')}
          >
            <Server className="mr-2" />
            Get Your Server
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up">
          <div className="bg-gradient-card rounded-xl p-8 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <div className="text-primary mb-4">
              <Zap size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              NVMe SSD storage with premium CPUs for zero lag
            </p>
          </div>

          <div className="bg-gradient-card rounded-xl p-8 border border-border backdrop-blur-sm hover:border-secondary/50 transition-all duration-300">
            <div className="text-secondary mb-4">
              <Shield size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">DDoS Protection</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security keeps your server safe
            </p>
          </div>

          <div className="bg-gradient-card rounded-xl p-8 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <div className="text-primary mb-4">
              <Server size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">99.9% Uptime</h3>
            <p className="text-muted-foreground">
              Reliable hosting with automatic backups
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  const handleRegister = () => {
    window.open("https://tally.so/r/wbp0p2", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/20"></div>
      
      {/* Crooked corner sections */}
      {/* Left corner - animated text */}
      <div className="absolute top-8 left-8 transform -rotate-3 z-20">
        <div className="bg-secondary/90 border border-accent/30 rounded-lg p-4 shadow-lg backdrop-blur-sm">
          <p className="text-sm font-bold text-accent typewriter-animation">
            BUILD WITHOUT PERMISSION
          </p>
        </div>
      </div>
      
      {/* Right corner - click me section */}
      <div className="absolute top-8 right-8 transform rotate-3 bg-secondary/90 border border-primary/30 rounded-lg p-4 shadow-lg backdrop-blur-sm z-20">
        <div className="text-center space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            Before you laugh, read this
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="text-xs px-3 py-1 hover:bg-primary/10"
          >
            click me
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-primary glow-text">
            GoonHacks
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A premier hackathon where innovation meets creativity. Build, learn, and compete with the best minds in tech.
          </p>
          
          <div className="pt-8">
            <Button variant="primary" size="lg" onClick={handleRegister} className="glow-border hover:glow-text transition-all duration-300 hover:scale-105">
              Register Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <Card className="p-6 bg-secondary border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-3 text-primary font-mono">48 Hours</h3>
              <p className="text-muted-foreground">Non-stop coding and innovation</p>
            </Card>
            
            <Card className="p-6 bg-secondary border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-semibold mb-3 text-accent font-mono">$50K Prizes</h3>
              <p className="text-muted-foreground">Win big with groundbreaking ideas</p>
            </Card>
            
            <Card className="p-6 bg-secondary border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-semibold mb-3 text-primary font-mono">500+ Hackers</h3>
              <p className="text-muted-foreground">Join a community of innovators</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-secondary">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-glow">
            GoonHacks
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A premier hackathon where innovation meets creativity. Build, learn, and compete with the best minds in tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="primary" size="lg" className="shadow-glow">
              Register Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <h3 className="text-2xl font-semibold mb-3 text-accent">48 Hours</h3>
              <p className="text-muted-foreground">Non-stop coding and innovation</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <h3 className="text-2xl font-semibold mb-3 text-accent">$50K Prizes</h3>
              <p className="text-muted-foreground">Win big with groundbreaking ideas</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <h3 className="text-2xl font-semibold mb-3 text-accent">500+ Hackers</h3>
              <p className="text-muted-foreground">Join a community of innovators</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
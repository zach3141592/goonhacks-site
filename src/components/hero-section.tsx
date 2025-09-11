import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  const handleRegister = () => {
    window.open("https://tally.so/r/wbp0p2", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-primary">
            GoonHacks
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A premier hackathon where innovation meets creativity. Build, learn, and compete with the best minds in tech.
          </p>
          
          <div className="pt-8">
            <Button variant="primary" size="lg" onClick={handleRegister}>
              Register Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <Card className="p-6 bg-secondary border-0">
              <h3 className="text-2xl font-semibold mb-3 text-primary">48 Hours</h3>
              <p className="text-muted-foreground">Non-stop coding and innovation</p>
            </Card>
            
            <Card className="p-6 bg-secondary border-0">
              <h3 className="text-2xl font-semibold mb-3 text-primary">$50K Prizes</h3>
              <p className="text-muted-foreground">Win big with groundbreaking ideas</p>
            </Card>
            
            <Card className="p-6 bg-secondary border-0">
              <h3 className="text-2xl font-semibold mb-3 text-primary">500+ Hackers</h3>
              <p className="text-muted-foreground">Join a community of innovators</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
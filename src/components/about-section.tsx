import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About GoonHacks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              GoonHacks is more than just a hackathon—it's a celebration of innovation, creativity, and the relentless pursuit of technological excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-secondary border-0 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in pushing boundaries and creating solutions that matter. Bring your wildest ideas to life.
              </p>
            </Card>
            
            <Card className="p-8 bg-secondary border-0 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Community Driven</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with like-minded developers, designers, and entrepreneurs from around the world.
              </p>
            </Card>
            
            <Card className="p-8 bg-secondary border-0 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Learn & Grow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access workshops, mentorship, and resources to elevate your skills and knowledge.
              </p>
            </Card>
            
            <Card className="p-8 bg-secondary border-0 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Win Big</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compete for substantial prizes and the opportunity to bring your project to market.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
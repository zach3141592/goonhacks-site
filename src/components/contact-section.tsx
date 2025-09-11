import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ContactSection = () => {
  const handleRegister = () => {
    window.open("https://tally.so/r/wbp0p2", "_blank");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Join?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to innovate, learn, and win big
            </p>
          </div>
          
          <Card className="p-12 bg-secondary border-0">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-foreground">Get Started Today</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Step 1</div>
                  <p className="text-muted-foreground">Apply</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Step 2</div>
                  <p className="text-muted-foreground">Attend</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button variant="primary" size="lg" onClick={handleRegister}>
                  Register
                </Button>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center space-y-2">
              <h4 className="font-semibold text-foreground">Location</h4>
              <p className="text-muted-foreground">Tech Innovation Center<br />123 Startup Ave</p>
            </div>
            <div className="text-center space-y-2">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <p className="text-muted-foreground">hello@goonhacks.com<br />+1 (555) 123-4567</p>
            </div>
            <div className="text-center space-y-2">
              <h4 className="font-semibold text-foreground">Follow Us</h4>
              <p className="text-muted-foreground">@goonhacks<br />goonhacks.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
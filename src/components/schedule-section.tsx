import { Button } from "@/components/ui/button";

export const ScheduleSection = () => {
  const handleViewSchedule = () => {
    window.open("https://docs.google.com/document/d/1U9JZh1b5SxfoGovdV0TnBsOY05CZnz3ZupmCmKMtIQ8/edit?usp=sharing", "_blank");
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Event Schedule
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              48 hours of non-stop innovation, learning, and networking
            </p>
            <div className="pt-6">
              <Button 
                variant="outline" 
                onClick={handleViewSchedule}
              >
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
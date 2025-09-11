import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ScheduleSection = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  const schedule = [
    {
      day: "Day 1",
      date: "March 15, 2024",
      events: [
        { time: "9:00 AM", event: "Registration & Check-in", description: "Get your swag and settle in" },
        { time: "10:00 AM", event: "Opening Ceremony", description: "Kick-off with inspiring talks" },
        { time: "11:00 AM", event: "Team Formation", description: "Find your perfect teammates" },
        { time: "12:00 PM", event: "Hacking Begins", description: "Let the coding commence!" },
        { time: "6:00 PM", event: "Dinner Break", description: "Refuel for the night ahead" },
      ]
    },
    {
      day: "Day 2",
      date: "March 16, 2024", 
      events: [
        { time: "8:00 AM", event: "Breakfast", description: "Start your day right" },
        { time: "12:00 PM", event: "Lunch Break", description: "Midday nutrition boost" },
        { time: "3:00 PM", event: "Mentorship Sessions", description: "Get expert guidance" },
        { time: "6:00 PM", event: "Submissions Due", description: "Finalize your projects" },
        { time: "7:00 PM", event: "Presentations", description: "Show off your creations" },
        { time: "9:00 PM", event: "Awards Ceremony", description: "Celebrate the winners" },
      ]
    }
  ];

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
                onClick={() => setShowSchedule(!showSchedule)}
              >
                {showSchedule ? "Hide Schedule" : "View Schedule"}
              </Button>
            </div>
          </div>
          
          {showSchedule && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
              {schedule.map((day) => (
                <Card key={day.day} className="p-8 bg-card border-border shadow-card">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold text-primary">{day.day}</h3>
                      <p className="text-muted-foreground">{day.date}</p>
                    </div>
                    
                    <div className="space-y-4">
                      {day.events.map((event, index) => (
                        <div key={index} className="flex gap-4 items-start">
                          <div className="w-20 flex-shrink-0">
                            <span className="text-sm font-medium text-primary">{event.time}</span>
                          </div>
                          <div className="flex-1 space-y-1">
                            <h4 className="font-semibold text-foreground">{event.event}</h4>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
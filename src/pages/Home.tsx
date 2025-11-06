import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Home = () => {
  return (
    <div className="bg-black">
      {/* Sticky Header Banner */}
      <div className="sticky top-0 z-50 bg-black py-4 md:py-6 px-4 md:px-6 w-full">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center w-full space-y-4 md:space-y-0">
          <div className="flex items-center justify-start">
            <span className="text-white font-bold text-lg md:text-xl square-font">
              GO ON HACKS
            </span>
          </div>
          
          {/* Navigation Menu */}
          <nav className="order-3 md:order-2 flex justify-center">
            <div className="flex justify-center space-x-6 md:space-x-12 text-sm font-medium">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">ABOUT</a>
              <a href="#schedule" className="text-foreground hover:text-primary transition-colors">SCHEDULE</a>
              <a href="#sponsors" className="text-foreground hover:text-primary transition-colors">SPONSORS</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            </div>
          </nav>
          
          <div className="flex justify-end order-2 md:order-3">
            <span className="text-white font-bold text-sm md:text-xl square-font text-right">
              BUILD WITHOUT PERMISSION
            </span>
          </div>
        </div>
      </div>

      {/* White separator line */}
      <div className="w-full h-px bg-white"></div>

      {/* Main Content */}
      <div>
        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Main heading */}
              <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font leading-tight">
                    <div className="opacity-line">THE HACKATHON</div>
                    <div className="opacity-line">THAT'S SOLVING</div>
                    <div className="opacity-line">THE WORLD'S WEIRDEST</div>
                    <div className="opacity-line">PROBLEMS</div>
                  </h1>
              </div>

              {/* Next race announcement */}
              <div className="py-2">
                <p className="text-lg text-foreground font-medium">
                  NOVEMBER 8-9, 2025 | BUILDER'S CLUB, WATERLOO, ON
                </p>
              </div>

              {/* Apply now button */}
              <div className="py-1">
                <a 
                  href="https://luma.com/7rnkumkx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-6 py-2 font-bold text-base hover:bg-blue-800 transition-colors"
                >
                  APPLY NOW
                </a>
              </div>

              {/* Join online competition button */}
              <div className="py-1">
                <a 
                  href="https://goonhacks.devpost.com/?_gl=1*15jhwpq*_gcl_au*NzM4NTI1ODE0LjE3NTg1MTQ1ODc.*_ga*MTE5MTY5ODEzMi4xNzA1NzY2OTgz*_ga_0YHJK3Y10M*czE3NjI0MTI3NzQkbzE1MiRnMSR0MTc2MjQxMzcxOSRqMjgkbDAkaDA." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-2 font-bold text-base hover:bg-green-700 transition-colors"
                >
                  JOIN ONLINE COMPETITION
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font mb-12">
                ABOUT
              </h1>

              {/* Content */}
              <div className="text-center space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                 Most hackathons solve the same "big ideas": healthcare, education, etc<br />
                 But that get's kinda boring after a while
                </p>
                
                <p className="text-lg leading-relaxed">
                 We've found that there's a whole world of really weird problems nobody touches<br />
                 Because they're weird and people are afraid of being judged
                </p>

                <p className="text-lg leading-relaxed">
                 Go On Hacks is for the people who mess with these strange ideas<br />
                 We tackle the overlooked, the awkward, and the stupid<br />
                </p>

                <p className="text-lg leading-relaxed">
                 You wanna make an AI agent to tell you when you're being too performative? <br />
                 An app that ransoms your old dms until you finally message that special someone? <br />
                 Do it. Just make it weird, make it funny, and make it without fear
                </p>

                <div className="text-center pt-8">
                  <p className="text-3xl md:text-4xl font-bold text-foreground square-font">
                    Weird Problems Need Solutions Too...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCHEDULE SECTION */}
        <section id="schedule" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font mb-12">
                SCHEDULE
              </h1>

              {/* Content */}
              <div className="space-y-8 flex flex-col items-center">
                {/* Saturday */}
                <div className="space-y-4 text-left w-full max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Saturday Nov 8, 2025:</h2>
                  <div className="text-foreground space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">9:00 am</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Hacker Check In Begins</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">10:00 am</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Opening Ceremony Starts / Hacking Begins</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">1:00 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Lunch</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">2:00 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Interview with Sherwood Callaway presented by Akatos</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">6:00 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Dinner</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">7:00 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Clash Royale Tourney</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">9:00 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Go On Competition :)))</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">12:00 am</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Late Night Snacks</span>
                    </div>
                  </div>
                </div>

                {/* Sunday */}
                <div className="space-y-4 pt-8 text-left w-full max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Sunday Nov 9, 2025:</h2>
                  <div className="text-foreground space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">9:00 am</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Breakfast Snacks</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">11:00 am</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Vibe Coding Bee</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">1:00 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Lunch</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">4:00 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Performative Male Contest</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">4:00 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Hacking Ends and Judging Starts</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-1 gap-y-1">
                      <span className="font-bold text-lg md:text-xl">6 or 7 pm</span>
                      <span className="text-lg md:text-xl hidden md:inline"> → </span>
                      <span className="text-lg">Dinner + Snacks + Awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPONSORS SECTION */}
        <section id="sponsors" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font">
                SPONSORS
              </h1>

              {/* Content */}
              <div className="space-y-12">
                {/* Our Sponsors Section */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Our Sponsors:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center max-w-5xl mx-auto">
                    <a 
                      href="https://www.spermracing.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm md:max-w-2xl md:col-span-2 hover:shadow-lg transition-shadow"
                    >
                      <img src="/SR.png" alt="Sperm Racing" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://www.shopify.com/ca" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/shopfy.png" alt="Shopify" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://typeos.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/typeos.svg" alt="TypeOS" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://buildersclub.ca/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/buildersclub.jpg" alt="Builders Club" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://www.polarity.cc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/polarity.png" alt="Polarity" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://staging.hackcanada.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/HackCanada.png" alt="Hack Canada" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/jvngyn/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/Jeff Nguyen.png" alt="Jeff Nguyen" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://tryvectus.ai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/vectus.png" alt="Vectus" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://buildbuddies.ca/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/buildbuddies.png" alt="Build Buddies" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/jointhesyndicate/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/syndicate.png" alt="Syndicate" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://www.akatos.house/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/akatos.png" alt="Akatos" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://athenachat.bot/chatbot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/athenaAI.png" alt="Athena AI" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                    <a 
                      href="https://www.aicollective.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow"
                    >
                      <img src="/sponsors/AICollective.png" alt="AI Collective" className="h-24 md:h-32 w-full object-contain" />
                    </a>
                  </div>
                </div>

                <div className="p-8 text-center">
                  <p className="text-lg text-foreground mb-4">
                    WANT TO SPONSOR US?
                  </p>
                  <p className="text-lg text-foreground mb-6">
                    Reach out to{" "}
                    <a 
                      href="mailto:goonhacks2025@gmail.com" 
                      className="text-white hover:text-gray-300 transition-colors underline"
                    >
                      goonhacks2025@gmail.com
                    </a>
                  </p>
                  <div className="text-center">
                    <a 
                      href="mailto:goonhacks2025@gmail.com" 
                      className="inline-block bg-blue-900 text-white px-8 py-3 font-bold text-lg hover:bg-blue-800 transition-colors"
                    >
                      BECOME A SPONSOR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font">
                FAQ
              </h1>

              {/* FAQ Content */}
              <div className="text-left">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      What makes Go On Hacks different from other hackathons?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      We focus on solving weird, unconventional problems that other hackathons ignore. Also, gonna be more hype than any other hackathon.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      Who can participate?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      Anyone with a passion for building. Students, professionals, designers, developers, entrepreneurs, etc
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      Do I need a team?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      You can participate solo or form teams of up to 4 people. You can also find a team on our Discord server.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      What should I bring?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      Your laptop, chargers, and an open mind. We'll provide food, drinks, WiFi, and fun challenges.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      Are there prizes?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      Win $1000 cash, $2000 in API credits, job interviews, and more! We have prizes for the best overall, weirdest idea, best pitch, most performative, etc. 
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      Is there a registration fee?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      Nope! Go On Hacks is completely free. 
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      What should I build?
                    </AccordionTrigger>
                      <AccordionContent className="text-foreground">
                        Something weird. Think about problems that are too strange, too awkward, or too niche for anyone else to tackle. Check out some{" "}
                        <a 
                          href="https://stupidhackathon.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors underline"
                        >
                          inspiration
                        </a>.
                      </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* White separator line */}
      <div className="w-full h-px bg-white"></div>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* Email Section */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white mb-3">Contact</h3>
                <a 
                  href="mailto:goonhacks2025@gmail.com" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  goonhacks2025@gmail.com
                </a>
              </div>

              {/* Social Media */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-3">Follow Us</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://x.com/Go_On_Hacks" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-1 hover:opacity-80 transition-opacity"
                  >
                    <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
                    <span className="text-white text-xs">Twitter</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/goonhacks/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-1 hover:opacity-80 transition-opacity"
                  >
                    <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                    <span className="text-white text-xs">LinkedIn</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/goonhacks/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-1 hover:opacity-80 transition-opacity"
                  >
                    <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
                    <span className="text-white text-xs">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Register Button */}
              <div className="text-center md:text-right">
                <a 
                  href="https://luma.com/7rnkumkx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-6 py-3 font-bold hover:bg-blue-800 transition-colors"
                >
                  APPLY NOW
                </a>
              </div>

            </div>

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-center space-y-2">
              <p className="text-gray-400 text-sm">
                © 2025 Go On Hacks. 
              </p>
              <p className="text-gray-400 text-sm">
                Inspired by{" "}
                <a 
                  href="https://stupidhackathon.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors underline"
                >
                  Stupid Hackathon
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

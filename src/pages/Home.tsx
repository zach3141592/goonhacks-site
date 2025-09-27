import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Home = () => {
  return (
    <div className="bg-black">
      {/* Sticky Header Banner */}
      <div className="sticky top-0 z-50 bg-black py-4 md:py-6 px-4 md:px-6 w-full">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center w-full space-y-4 md:space-y-0">
          <div className="flex items-center justify-start">
            <span className="text-white font-bold text-lg md:text-xl square-font">
              GOONHACKS
            </span>
          </div>
          
          {/* Navigation Menu */}
          <nav className="order-3 md:order-2 flex justify-center">
            <div className="flex justify-center space-x-6 md:space-x-12 text-sm font-medium">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">ABOUT</a>
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
                  OCTOBER 9-10, 2025 | BUILDER'S CLUB, WATERLOO, ON
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

              {/* Scroll indicator */}
              <div className="pt-3">
                <a href="#about" className="inline-block hover:text-primary transition-colors">
                  <h2 className="text-xl font-bold text-foreground mb-2">BEFORE YOU LAUGH. READ THIS.</h2>
                  <div className="w-24 h-px bg-foreground mx-auto"></div>
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
                 Most hackathons stick to solving the usual mainstream problems.<br />
                 Same apps, same pitches, same "big ideas".
                </p>
                
                <p className="text-lg leading-relaxed">
                 But there's a whole world of odd problems nobody touches;<br />
                 mostly because they're weird and people are afraid of being judged.
                </p>

                <p className="text-lg leading-relaxed">
                 GoonHacks is for the people who mess with these strange themes.<br />
                 We tackle the overlooked and the awkward,<br />
                 and we do it together.
                </p>

                <p className="text-lg leading-relaxed">
                 There's strength in numbers, so you can build with zero fear.<br />
                 Build something cool to solve something weird. 
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

        {/* SPONSORS SECTION */}
        <section id="sponsors" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font">
                SPONSORS
              </h1>

              {/* Content */}
              <div className="space-y-8">
                <div className="p-8 text-center">
                  <p className="text-lg text-foreground mb-4">
                    Interested in sponsoring?
                  </p>
                  <p className="text-lg text-foreground mb-6">
                    Reach out to us at{" "}
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
                      What makes GoonHacks different from other hackathons?
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
                      Anyone with a passion for building! Students, professionals, designers, developers, entrepreneurs, etc.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      Do I need a team?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      You can participate solo or form teams of up to 3 people. You can also find a team on our Discord server.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      What should I bring?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      Your laptop, chargers, and an open mind. We'll provide food, drinks, WiFi, and fun challenges. Sleeping bags are recommended.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      Are there prizes?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      Absolutely! We have prizes for the weirdest idea, best pitch, most viral, biggest balls, most performative, etc. 
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-foreground/20">
                    <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                      Is there a registration fee?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      Nope! GoonHacks is completely free. 
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
                  <div className="flex flex-col items-center space-y-1">
                    <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
                    <span className="text-white text-xs">Twitter</span>
                  </div>
                  <a 
                    href="https://www.linkedin.com/company/goonhacks/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-1 hover:opacity-80 transition-opacity"
                  >
                    <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                    <span className="text-white text-xs">LinkedIn</span>
                  </a>
                  <div className="flex flex-col items-center space-y-1">
                    <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
                    <span className="text-white text-xs">Instagram</span>
                  </div>
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
                © 2025 GoonHacks. Build without permission.
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

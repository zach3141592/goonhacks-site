export const Home = () => {
  return (
    <div className="bg-background checkered-bg">
      {/* Fixed Navigation Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-6 px-6 flex items-center justify-between w-full relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-br from-transparent via-blue-600/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-transparent to-blue-700/20"></div>
        </div>
        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-background opacity-80"></div>
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl square-font">
              GOONHACKS
            </span>
          </div>
          <span className="text-white font-bold text-xl square-font typing-only">
            BUILD WITHOUT PERMISSION
          </span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="py-4 w-full">
        <div className="flex justify-center space-x-12 text-sm font-medium">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">HOME</a>
          <a href="#manifesto" className="text-foreground hover:text-primary transition-colors">MANIFESTO</a>
          <a href="#sponsors" className="text-foreground hover:text-primary transition-colors">SPONSORS</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Main Content */}
      <div>
        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 -mt-24">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Main heading */}
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font leading-tight">
                  <div className="opacity-line">THE HACKATHON.</div>
                  <div className="opacity-line">THAT'S SOLVING.</div>
                  <div className="opacity-line">THE WORLD'S WEIRDEST PROBLEMS.</div>
                </h1>
              </div>

              {/* Next race announcement */}
              <div className="py-2">
                <p className="text-lg text-foreground font-medium">
                  NOVEMBER 29-30, 2025 | WATERLOO, ON
                </p>
              </div>

              {/* Join waitlist button */}
              <div className="py-1">
                <a 
                  href="https://tally.so/r/wbp0p2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-6 py-2 font-bold text-base hover:bg-blue-800 transition-colors"
                >
                  JOIN OUR WAITLIST
                </a>
              </div>

              {/* Scroll indicator */}
              <div className="pt-3">
                <a href="#manifesto" className="inline-block hover:text-primary transition-colors">
                  <h2 className="text-xl font-bold text-foreground mb-2">BEFORE YOU LAUGH. READ THIS.</h2>
                  <div className="w-24 h-px bg-foreground mx-auto"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO SECTION */}
        <section id="manifesto" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font">
                MANIFESTO
              </h1>

              {/* Content */}
              <div className="text-left space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  We believe the world's weirdest problems deserve the world's weirdest solutions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  While others build the same apps, solve the same problems, and chase the same investors, 
                  we're here to tackle the absurd, the overlooked, and the downright bizarre.
                </p>

                <p className="text-lg leading-relaxed">
                  This isn't about changing the world with another social media platform. 
                  This is about building solutions for problems you didn't know existed.
                </p>

                <p className="text-lg leading-relaxed">
                  Welcome to the hackathon where creativity meets chaos, where the strangest idea 
                  might just be the most brilliant one.
                </p>

                <div className="text-center pt-8">
                  <p className="text-3xl md:text-4xl font-bold text-foreground square-font">
                    Ready to solve something weird?
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
                {/* Why Sponsor Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Sponsor GoonHacks?</h3>
                  <div className="space-y-6 text-left">
                    <p className="text-lg text-foreground">
                      GoonHacks isn't just another hackathon—it's where unconventional thinking meets real innovation. 
                      When you sponsor us, you're not just supporting an event, you're investing in the future of creative problem-solving.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-foreground mb-3">Reach Innovators</h4>
                        <p className="text-foreground">
                          Connect with builders who think differently and solve problems others won't touch.
                        </p>
                      </div>
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-foreground mb-3">Brand Association</h4>
                        <p className="text-foreground">
                          Align your brand with creativity, innovation, and the courage to build without permission.
                        </p>
                      </div>
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-foreground mb-3">Talent Pipeline</h4>
                        <p className="text-foreground">
                          Discover and recruit the next generation of unconventional problem solvers.
                        </p>
                      </div>
                    </div>

                    <div className="text-center pt-6">
                      <a 
                        href="https://docs.google.com/document/d/1tfz8JSWi_9jlc3vMOUv-DeeHlCEzL-yNa5-8cTSyPxg/edit?usp=sharing" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-900 text-white px-8 py-3 font-bold text-lg hover:bg-blue-800 transition-colors"
                      >
                        SPONSOR PACKAGE
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Sponsors Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Sponsors</h3>
                  <div className="text-center space-y-6">
                    <p className="text-lg text-foreground">
                      We're proud to partner with organizations that believe in unconventional innovation.
                    </p>
                    
                    {/* Sponsor Logos Grid - Currently Empty */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                      <div className="bg-background/20 border-2 border-dashed border-foreground/30 rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                        <span className="text-foreground/60 text-center">
                          Your Logo<br />Here
                        </span>
                      </div>
                      <div className="bg-background/20 border-2 border-dashed border-foreground/30 rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                        <span className="text-foreground/60 text-center">
                          Your Logo<br />Here
                        </span>
                      </div>
                      <div className="bg-background/20 border-2 border-dashed border-foreground/30 rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                        <span className="text-foreground/60 text-center">
                          Your Logo<br />Here
                        </span>
                      </div>
                    </div>

                    <p className="text-foreground">
                      Want to see your company here? Join our mission to support weird problem solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font">
                CONTACT US
              </h1>

              {/* Content */}
              <div className="space-y-12">
                <p className="text-lg text-foreground">
                  Questions about the world's weirdest hackathon? We've got answers.
                </p>

                {/* Contact Email */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">All Inquiries</h3>
                  <div className="text-center space-y-4">
                    <p className="text-foreground text-lg">
                      For all questions, sponsorship opportunities, media inquiries, and general information:
                    </p>
                    <div className="text-center">
                      <a 
                        href="mailto:goonhacks2025@gmail.com" 
                        className="inline-block text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        goonhacks2025@gmail.com
                      </a>
                    </div>
                    <p className="text-foreground">
                      We'll get back to you asap
                    </p>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h3>
                  <div className="space-y-6 text-left">
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">What makes GoonHacks different from other hackathons?</h4>
                      <p className="text-foreground">
                        We focus on solving weird, unconventional problems that other hackathons ignore. Think outside the box and tackle absurd challenges that might just change the world.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Who can participate?</h4>
                      <p className="text-foreground">
                        Anyone with a passion for building! Students, professionals, designers, developers, entrepreneurs - if you're ready to solve something weird, you're welcome.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Do I need a team?</h4>
                      <p className="text-foreground">
                        You can participate solo or form teams of up to 4 people. We'll also have team formation sessions for those looking to join forces with fellow weird problem solvers.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">What should I bring?</h4>
                      <p className="text-foreground">
                        Your laptop, chargers, and an open mind. We'll provide food, drinks, WiFi, and all the weird problems you can handle. Sleeping bags are optional but recommended!
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Are there prizes?</h4>
                      <p className="text-foreground">
                        Absolutely! We have prizes for the most innovative solutions, best weird problem tackle, and audience choice. Plus, the real prize is the friends you make along the way (and the chaos you create).
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Is there a registration fee?</h4>
                      <p className="text-foreground">
                        Nope! GoonHacks is completely free. We believe weird problem solving shouldn't be behind a paywall.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Event Details</h3>
                  <div className="text-left space-y-2">
                    <p className="text-foreground">
                      <strong>TBD</strong>
                    </p>
                    <p className="text-foreground">
                      Goated Spot<br />
                      Waterloo, ON<br />
                      Canada
                    </p>
                    <p className="text-foreground mt-4">
                      <strong>Dates:</strong> November 29-30, 2025
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Follow Us</h3>
                  <div className="flex justify-center space-x-8">
                    <div className="flex flex-col items-center space-y-2">
                      <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
                      <span className="text-foreground">Twitter</span>
                    </div>
                    <a 
                      href="https://www.linkedin.com/company/goonhacks/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center space-y-2 hover:opacity-80 transition-opacity"
                    >
                      <img src="/Linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                      <span className="text-foreground">LinkedIn</span>
                    </a>
                    <div className="flex flex-col items-center space-y-2">
                      <img src="/Instagram.png" alt="Instagram" className="w-8 h-8" />
                      <span className="text-foreground">Instagram</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

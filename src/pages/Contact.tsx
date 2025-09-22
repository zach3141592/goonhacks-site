export const Contact = () => {
  return (
    <div className="min-h-screen bg-background checkered-bg">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-6 px-6 flex items-center justify-between w-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-br from-transparent via-blue-600/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-transparent to-blue-700/20"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-background"></div>
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl square-font">
              GOONHACKS
            </span>
          </div>
          <span className="text-white font-bold text-xl square-font">
            CONTACT
          </span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Navigation */}
          <nav className="flex justify-center space-x-8 text-sm font-medium mb-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">HOME</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">ABOUT</a>
            <a href="/manifesto" className="text-foreground hover:text-primary transition-colors">MANIFESTO</a>
            <a href="/sponsors" className="text-foreground hover:text-primary transition-colors">SPONSORS</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">CONTACT</a>
          </nav>
          
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
            <div className="bg-secondary p-8 rounded-lg">
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
                  We'll get back to you within 24 hours!
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-secondary p-8 rounded-lg">
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

            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Event Location</h3>
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
    </div>
  );
};

export default Contact;

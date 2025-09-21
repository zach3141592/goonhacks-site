export const About = () => {
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
            ABOUT
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
            ABOUT GOONHACKS
          </h1>

          {/* Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                GoonHacks isn't your typical hackathon. We're the event where the weird, wonderful, and 
                wildly unconventional come together to solve problems nobody else is tackling.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Born from the belief that innovation thrives in chaos, GoonHacks celebrates the 
                builders who think differently, code creatively, and aren't afraid to fail spectacularly 
                in pursuit of something extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="bg-secondary p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-foreground leading-relaxed">
                  To create a space where unconventional thinking is not just welcomed, but celebrated. 
                  Where the strangest idea in the room might just be the most brilliant one.
                </p>
              </div>

              <div className="bg-secondary p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-foreground leading-relaxed">
                  A world where problem-solving isn't constrained by conventional wisdom, where 
                  innovation comes from the margins, and where every weird idea gets its moment to shine.
                </p>
              </div>

              <div className="bg-secondary p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-foreground">What Makes Us Different</h3>
                <ul className="text-foreground space-y-2">
                  <li>• Problems you've never heard of</li>
                  <li>• Solutions that shouldn't work (but do)</li>
                  <li>• A community that embraces the absurd</li>
                  <li>• Judges who appreciate the unconventional</li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Who Should Come</h3>
                <ul className="text-foreground space-y-2">
                  <li>• Developers who think outside the box</li>
                  <li>• Designers who break the rules</li>
                  <li>• Entrepreneurs with weird ideas</li>
                  <li>• Anyone ready to build without permission</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Event Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">When</h4>
                  <p className="text-foreground">November 29-30, 2025</p>
                  <p className="text-foreground text-sm">24 hours of building</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Where</h4>
                  <p className="text-foreground">Builder's Club</p>
                  <p className="text-foreground text-sm">165 King St W, Waterloo</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">What</h4>
                  <p className="text-foreground">Weird problems</p>
                  <p className="text-foreground text-sm">Brilliant solutions</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-xl text-foreground mb-6">
                Ready to solve something the world has never seen before?
              </p>
              <a 
                href="https://tally.so/r/wbp0p2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 text-white px-8 py-3 font-bold text-lg hover:bg-blue-800 transition-colors"
              >
                JOIN THE MISSION
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

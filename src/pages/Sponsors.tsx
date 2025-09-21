export const Sponsors = () => {
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
            SPONSORS
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
            SPONSORS
          </h1>

          {/* Content */}
          <div className="space-y-8">
            {/* Why Sponsor Section */}
            <div className="bg-secondary p-8 rounded-lg">
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
                    href="mailto:goonhacks2025@gmail.com?subject=Sponsor Package Request" 
                    className="inline-block bg-blue-900 text-white px-8 py-3 font-bold text-lg hover:bg-blue-800 transition-colors"
                  >
                    SPONSOR PACKAGE
                  </a>
                </div>
              </div>
            </div>

            {/* Our Sponsors Section */}
            <div className="bg-secondary p-8 rounded-lg">
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
    </div>
  );
};

export default Sponsors;

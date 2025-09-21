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
            <p className="text-lg text-foreground">
              Partner with us to support the world's weirdest hackathon.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Title Sponsor</h3>
                <p className="text-foreground mb-4">Lead the chaos. Your brand front and center.</p>
                <ul className="text-foreground text-left space-y-2">
                  <li>• Logo on all materials</li>
                  <li>• Opening ceremony speaking slot</li>
                  <li>• Exclusive networking access</li>
                  <li>• Custom challenge category</li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Track Sponsor</h3>
                <p className="text-foreground mb-4">Sponsor a specific weird problem category.</p>
                <ul className="text-foreground text-left space-y-2">
                  <li>• Category naming rights</li>
                  <li>• Judge panel participation</li>
                  <li>• Prize presentation</li>
                  <li>• Logo on track materials</li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Food Sponsor</h3>
                <p className="text-foreground mb-4">Feed the innovators. Fuel the weird.</p>
                <ul className="text-foreground text-left space-y-2">
                  <li>• Branded meal service</li>
                  <li>• Logo on food packaging</li>
                  <li>• Social media mentions</li>
                  <li>• Happy hackers</li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Swag Sponsor</h3>
                <p className="text-foreground mb-4">Memorable takeaways for weird problem solvers.</p>
                <ul className="text-foreground text-left space-y-2">
                  <li>• Custom branded items</li>
                  <li>• Distribution at event</li>
                  <li>• Post-event social reach</li>
                  <li>• Lasting brand impression</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-lg text-foreground mb-6">
                Ready to sponsor something wonderfully weird?
              </p>
              <a 
                href="mailto:sponsors@goonhacks.com" 
                className="inline-block bg-blue-900 text-white px-8 py-3 font-bold text-lg hover:bg-blue-800 transition-colors"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

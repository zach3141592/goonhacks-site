export const Races = () => {
  return (
    <div className="min-h-screen bg-background checkered-bg">
      {/* Dark blue banner with logo and text - full width, touching top */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-6 px-6 flex items-center justify-between w-full relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-br from-transparent via-blue-600/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-transparent to-blue-700/20"></div>
        </div>
        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-background"></div>
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

          {/* Race at home button */}
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

          {/* Previous races */}
          <div className="pt-3">
            <a href="/manifesto" className="inline-block hover:text-primary transition-colors">
              <h2 className="text-xl font-bold text-foreground mb-2">BEFORE YOU LAUGH. READ THIS.</h2>
              <div className="w-24 h-px bg-foreground mx-auto"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Races;

export const Manifesto = () => {
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
            MANIFESTO
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
    </div>
  );
};

export default Manifesto;

export const Contact = () => {
  return (
    <div className="min-h-screen bg-background checkered-bg">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-4 px-6 flex items-center justify-between w-full relative overflow-hidden">
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
          </nav>
          
          {/* Back link */}
          <div className="text-left">
            <a href="/" className="text-blue-900 hover:text-blue-800 transition-colors">
              ← Back
            </a>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground square-font">
            CONTACT US
          </h1>

          {/* Content */}
          <div className="space-y-12">
            <p className="text-lg text-foreground">
              Questions about the world's weirdest hackathon? We've got answers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-lg text-left space-y-4">
                <h3 className="text-2xl font-bold text-foreground">General Inquiries</h3>
                <p className="text-foreground">
                  <strong>Email:</strong> hello@goonhacks.com
                </p>
                <p className="text-foreground">
                  Got questions about the event, registration, or just want to say hi? Drop us a line.
                </p>
              </div>

              <div className="bg-secondary p-8 rounded-lg text-left space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Sponsorship</h3>
                <p className="text-foreground">
                  <strong>Email:</strong> sponsors@goonhacks.com
                </p>
                <p className="text-foreground">
                  Want to sponsor something wonderfully weird? Let's talk partnerships.
                </p>
              </div>

              <div className="bg-secondary p-8 rounded-lg text-left space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Media & Press</h3>
                <p className="text-foreground">
                  <strong>Email:</strong> press@goonhacks.com
                </p>
                <p className="text-foreground">
                  Journalists, bloggers, content creators - we'd love to chat about weird tech.
                </p>
              </div>

              <div className="bg-secondary p-8 rounded-lg text-left space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Mentors & Judges</h3>
                <p className="text-foreground">
                  <strong>Email:</strong> mentors@goonhacks.com
                </p>
                <p className="text-foreground">
                  Want to help guide weird problem solvers? Join our mentor/judge team.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Event Location</h3>
              <div className="text-left space-y-2">
                <p className="text-foreground">
                  <strong>Builder's Club</strong>
                </p>
                <p className="text-foreground">
                  165 King St W<br />
                  Toronto, ON<br />
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
                  <span className="text-foreground">@goonhacks</span>
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

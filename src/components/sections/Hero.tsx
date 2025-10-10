import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-purple text-2xl">✨</span>
              <span className="text-purple font-medium tracking-wide uppercase text-sm">Available for Projects</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-purple animate-fade-in" style={{ animationDelay: "0.2s" }}>Sabarish!</span>
              <br />
              <span className="text-navy">Full Stack Developer</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              I'm a passionate full stack developer specializing in building exceptional digital experiences. I build responsive web applications using modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Talk
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative stars */}
              <div className="absolute -top-8 -right-8 text-purple/20 animate-pulse" style={{ animationDuration: "3s" }}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                </svg>
              </div>
              <div className="absolute -bottom-12 -left-8 text-purple/10 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                </svg>
              </div>
              
              {/* Profile Image Circle */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-purple shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Sabarish Kannan P" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

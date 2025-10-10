import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-primary font-medium animate-fade-in">Hi, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-letter-reveal">
                <span className="text-navy">Sabarish</span>
                <br />
                <span className="text-navy">Kannan P</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Full Stack Developer — React & Node.js
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Passionate about building beautiful and functional web applications. 
              Specializing in modern frontend and backend technologies.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
              <Button 
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="group"
              >
                See Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Sabarish_Kannan_Resume.pdf';
                  link.click();
                }}
                className="group"
              >
                <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                View Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Decorative Circle */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-light-purple/20 rounded-full animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-br from-purple to-light-purple rounded-full flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-card m-4 flex flex-col items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-5xl font-bold text-navy">3+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                    <div className="space-y-2">
                      <div className="text-5xl font-bold text-navy">50+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple rounded-full animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-light-purple rounded-full animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }} />
              <div className="absolute bottom-1/4 -right-8 w-10 h-10 bg-accent rounded-full animate-bounce" style={{ animationDelay: "2s", animationDuration: "5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

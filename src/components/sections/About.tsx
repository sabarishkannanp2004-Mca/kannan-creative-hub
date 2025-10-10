import { Code2, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium mb-2">NICE TO MEET YOU!</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-purple to-light-purple rounded-3xl rotate-6 opacity-20" />
              <div className="relative bg-gradient-to-br from-purple to-light-purple p-1 rounded-3xl">
                <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center">
                  <span className="text-8xl font-bold text-purple">SK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-navy">Sabarish Kannan P</h3>
              <p className="text-xl text-primary font-medium">Full Stack Developer</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm <span className="text-primary font-semibold">Sabarish Kannan P</span>, 
              a passionate Full Stack Developer with expertise in both frontend and backend technologies. 
              I specialize in building modern, responsive web applications using React, Node.js, and cutting-edge tools.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in JavaScript and a keen eye for design, I create seamless user experiences 
              that combine functionality with aesthetics. I'm dedicated to writing clean, maintainable code and 
              continuously learning new technologies to stay ahead in the ever-evolving web development landscape.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-mint rounded-2xl p-6 text-center hover:shadow-card transition-all">
                <div className="text-3xl font-bold text-navy mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-secondary rounded-2xl p-6 text-center hover:shadow-card transition-all">
                <div className="text-3xl font-bold text-navy mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="bg-accent/30 rounded-2xl p-6 text-center hover:shadow-card transition-all">
                <div className="text-3xl font-bold text-navy mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card">
                <Code2 size={18} className="text-primary" />
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card">
                <Heart size={18} className="text-primary" />
                <span className="text-sm font-medium">Passionate</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card">
                <Sparkles size={18} className="text-primary" />
                <span className="text-sm font-medium">Creative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

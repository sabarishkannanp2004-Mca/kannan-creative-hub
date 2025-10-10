import { Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-purple font-medium tracking-wide uppercase text-sm mb-4">- Nice to Meet You!</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-navy mb-4">Sabarish Kannan P</h2>
          <p className="text-xl text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-start">
          <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello there! My name is <span className="text-purple font-semibold">Sabarish Kannan P</span>. I am a full stack developer, and I'm very passionate and dedicated to my work.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With 3+ years of experience as a professional developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development process, from discussion and collaboration to implementation and deployment.
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-4 bg-card p-6 rounded-2xl shadow-card">
                <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center">
                  <Mail className="text-purple" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                  <p className="text-lg font-semibold text-navy">sabarishkannanp2004@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-card p-12 rounded-3xl shadow-card">
            <p className="text-purple font-medium tracking-wide uppercase text-sm mb-4">- Experience</p>
            <h3 className="text-4xl font-bold text-navy mb-6">Everything about me!</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies. My expertise spans both frontend and backend development, allowing me to create comprehensive solutions. I'm passionate about writing clean, maintainable code and staying up-to-date with the latest industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

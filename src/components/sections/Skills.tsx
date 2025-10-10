const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Netlify",
      icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-purple font-medium tracking-wide uppercase text-sm mb-4">- My Skills</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-navy mb-6">Technologies I Work With</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Always Learning Card */}
        <div className="bg-gradient-to-br from-purple/10 to-light-purple/10 p-12 rounded-3xl text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center">
              <span className="text-4xl">💻</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-navy mb-4">Always Learning</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm constantly expanding my skillset and staying updated with the latest technologies and best practices in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

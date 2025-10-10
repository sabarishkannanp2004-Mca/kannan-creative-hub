const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Netlify",
      logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium mb-2">WHAT I DO</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">My Skills</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-navy text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

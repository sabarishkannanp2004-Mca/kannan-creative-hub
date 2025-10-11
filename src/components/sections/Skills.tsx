import "./Skills.css";

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
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <p className="skills-subtitle">- My Skills</p>
          <h2 className="skills-title">Technologies I Work With</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Always Learning Card */}
        <div className="learning-card">
          <div className="learning-icon-wrapper">
            <div className="learning-icon">
              <span>💻</span>
            </div>
          </div>
          <h3 className="learning-title">Always Learning</h3>
          <p className="learning-description">
            I'm constantly expanding my skillset and staying updated with the latest technologies and best practices in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

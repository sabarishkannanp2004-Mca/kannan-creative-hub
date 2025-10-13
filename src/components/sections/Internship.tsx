import "./Internship.css";

const Internship = () => {
  return (
    <section id="internship" className="internship-section">
      <div className="internship-container">
        <div className="internship-header">
          <p className="internship-subtitle">- Experience</p>
          <h2 className="internship-title">Internship</h2>
          <p className="internship-description">
            Professional experience that shaped my journey as a developer
          </p>
        </div>

        <div className="internship-content">
          <div className="internship-card">
            <div className="internship-card-content">
              <div className="internship-header-flex">
                <div className="internship-logo-wrapper">
                  <img 
                    src="https://i.postimg.cc/zGN5T4d7/images.jpg"
                    alt="Pumo Technovation logo"
                    className="internship-logo"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/80x80/6366f1/ffffff?text=PUMO";
                    }}
                  />
                </div>
                <div className="internship-info">
                  <h3 className="internship-role">Full Stack Developer Intern</h3>
                  <p className="internship-company">Pumo Technovation</p>
                  <p className="internship-duration">6 Months</p>
                </div>
              </div>

              <div className="internship-responsibilities">
                <p className="responsibility-item">
                  <span className="responsibility-bullet">•</span>
                  <span>Developed and maintained full-stack web applications using modern technologies</span>
                </p>
                <p className="responsibility-item">
                  <span className="responsibility-bullet">•</span>
                  <span>Collaborated with cross-functional teams to deliver high-quality solutions</span>
                </p>
                <p className="responsibility-item">
                  <span className="responsibility-bullet">•</span>
                  <span>Gained hands-on experience with React, Node.js, and database management</span>
                </p>
                <p className="responsibility-item">
                  <span className="responsibility-bullet">•</span>
                  <span>Participated in code reviews and learned industry best practices</span>
                </p>
              </div>

              <div className="internship-skills">
                <div className="internship-skills-list">
                  {["React", "Node.js", "JavaScript", "CSS", "Git", "Agile"].map((skill) => (
                    <span key={skill} className="internship-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;

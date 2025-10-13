import { Mail } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <p className="about-subtitle">- About Me</p>
     
          <h3 className="about-title">Sabarish Kannan P</h3>
          <p className="about-role">Full Stack Developer</p>
          <p className="about-description">
            I'm a passionate full stack developer with experience in building modern web applications. 
            I specialize in React, Node.js, and creating seamless user experiences. My goal is to write 
            clean, efficient code and build digital solutions that make a difference.
          </p>
        </div>

        <div className="about-contact-card">
          <div className="about-contact-icon">
            <Mail size={28} />
          </div>
          <div>
            <p className="about-contact-label">Email me at</p>
            <p className="about-contact-value">sabarishkannanp2004@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

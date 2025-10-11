import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-icon">✨</span>
              <span className="hero-badge-text">Available for Projects</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Sabarish!</span>
              <br />
              <span className="hero-subtitle">Full Stack Developer</span>
            </h1>
            
            <p className="hero-description">
              I'm a passionate full stack developer specializing in building exceptional digital experiences. I build responsive web applications using modern technologies.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowRight size={20} />
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/psk_resume.pdf';
                  link.download = 'Sabarish_Kannan_Resume.pdf';
                  link.click();
                }}
              >
                View CV
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              {/* Decorative stars */}
              <div className="hero-star-1">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                </svg>
              </div>
              <div className="hero-star-2">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                </svg>
              </div>
              
              {/* Profile Image Circle */}
              <div className="hero-image-circle">
                <img 
                  src={profileImage} 
                  alt="Sabarish Kannan P - Full Stack Developer" 
                  className="hero-profile-image"
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

import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import profileImage from "@/assets/profile.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: Home, path: "#home" },
    { name: "About", icon: User, path: "#about" },
    { name: "Skills", icon: Code, path: "#skills" },
    { name: "Projects", icon: Briefcase, path: "#projects" },
    { name: "Internship", icon: Briefcase, path: "#internship" },
    { name: "Contact", icon: Mail, path: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-button"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${!isOpen ? 'closed' : ''}`}>
        <div className="sidebar-content">
          {/* Profile Section */}
          <div className="sidebar-profile">
            <div className="profile-image-wrapper">
              <img 
                src={profileImage} 
                alt="Sabarish Kannan P profile" 
                className="profile-image"
              />
            </div>
            <h2 className="profile-name">Sabarish Kannan P</h2>
            
            {/* Social Icons */}
            <div className="social-icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.naukri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="Naukri Profile"
              >
                <img src="https://static.naukimg.com/s/0/0/i/new-homepage/apple-touch-icon.png" alt="Naukri" />
              </a>
              <a
                href="https://www.hackerrank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="HackerRank Profile"
              >
                <img src="https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png" alt="HackerRank" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className="nav-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.path);
                    }}
                    className="nav-link"
                  >
                    <item.icon size={20} className="nav-icon" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="sidebar-footer">
            <p className="copyright">
              © 2025 Sabarish Kannan P
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

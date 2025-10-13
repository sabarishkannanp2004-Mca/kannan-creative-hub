import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "AI Crime Generator",
      description:
        "An intelligent crime data generation system using React frontend and Neon database for real-time analytics and visualization.",
      category: "AI Application",
      tags: ["React", "Neon DB", "AI"],
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      github: "https://github.com/sabarishkannanp2004-Mca/Ai-crime-report-maker",
      live: "https://ai-crime-generator-demo.netlify.app",
    },
    {
      title: "Todo List Application",
      description:
        "A feature-rich todo list app with task management, categories, and local storage persistence.",
      category: "Web Application",
      tags: ["React", "JavaScript", "CSS"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      github: "https://github.com/sabarishkannanp2004-Mca/todolist",
      live: "https://todo-list-demo.netlify.app",
    },
    {
      title: "Stopwatch Timer",
      description:
        "A precise stopwatch application with lap timing, pause/resume functionality, and clean UI.",
      category: "Utility App",
      tags: ["JavaScript", "HTML", "CSS"],
      image:
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&h=300&fit=crop",
      github: "https://github.com/sabarishkannanp2004-Mca/stopwatch",
      live: "https://stopwatchsabarish.netlify.app/",
    },
    {
      title: "E-commerce Website",
      description:
        "A modern e-commerce platform with product catalog, shopping cart, and checkout functionality.",
      category: "Full Stack",
      tags: ["React", "Node.js", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
      github: "https://github.com/sabarishkannanp2004-Mca/Frontend-projects/tree/main/simple-ecommerce-main",
      live: "https://ecommerce-demo.netlify.app",
    },
    {
      title: "Calculator",
      description:
        "A simple calculator using React js and checkout functionality.",
      category: "Full Stack",
      tags: ["React", "Node.js", ],
      image:
        "https://i.postimg.cc/PrDjcLTs/neon-style-device-for-calculating-mathematical-data-calculator-with-buttons-with-numbers-and-math-sy.jpg",
      github: "https://github.com/sabarishkannanp2004-Mca/calculator",
      live: "https://ecommerce-demo.netlify.app",
    },
  ];

  const handleGitHubClick = (url) => {
    window.open(url, "_blank");
  };

  const handleLiveDemoClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-subtitle">- Projects</p>
          <h2 className="projects-title">Recent Completed Works</h2>
          <p className="projects-description">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="project-image"
                />

                {/* Overlay Buttons */}
                <div className="project-overlay">
                  <button
                    className="overlay-btn github"
                    onClick={() => handleGitHubClick(project.github)}
                  >
                    <FaGithub /> Code
                  </button>
                  <button
                    className="overlay-btn live"
                    onClick={() => handleLiveDemoClick(project.live)}
                  >
                    <FiExternalLink /> Demo
                  </button>
                </div>
              </div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <button className="btn btn-outline">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

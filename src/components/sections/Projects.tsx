import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AI Crime Generator",
      description: "An intelligent crime data generation system using React frontend and Neon database for real-time analytics and visualization.",
      category: "AI Application",
      tags: ["React", "Neon DB", "AI"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
    },
    {
      title: "Todo List Application",
      description: "A feature-rich todo list app with task management, categories, and local storage persistence.",
      category: "Web Application",
      tags: ["React", "JavaScript", "CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    },
    {
      title: "Stopwatch Timer",
      description: "A precise stopwatch application with lap timing, pause/resume functionality, and clean UI.",
      category: "Utility App",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&h=300&fit=crop",
    },
    {
      title: "E-commerce Website",
      description: "A modern e-commerce platform with product catalog, shopping cart, and checkout functionality.",
      category: "Web Application",
      tags: ["React", "Node.js", "CSS"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    },
    {
      title: "Calculator",
      description: "A sleek calculator app with advanced mathematical operations and responsive design.",
      category: "Utility App",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop",
    },
    {
      title: "Tour Website",
      description: "An elegant tourism website showcasing destinations with beautiful imagery and booking features.",
      category: "Web Application",
      tags: ["React", "JavaScript", "CSS"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
    },
  ];

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
          <button className="btn btn-outline">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

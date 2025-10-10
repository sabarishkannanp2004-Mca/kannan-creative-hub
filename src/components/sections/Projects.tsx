import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "To-Do List",
      description: "A modern task management app with drag-and-drop functionality and local storage",
      category: "Web App",
      gradient: "from-purple to-light-purple",
    },
    {
      title: "Stopwatch",
      description: "Precise stopwatch application with lap timing and split functionality",
      category: "Utility",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "E-commerce Website",
      description: "Full-featured online shopping platform with cart and checkout system",
      category: "Full Stack",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      title: "Calculator",
      description: "Scientific calculator with advanced mathematical operations",
      category: "Web App",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Tour Website",
      description: "Beautiful travel booking platform with interactive maps and galleries",
      category: "Frontend",
      gradient: "from-pink-400 to-purple-600",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium mb-2">PROJECTS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">Recent Work</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent projects and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-slide-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
              
              {/* Content */}
              <div className="relative p-8 h-64 flex flex-col justify-between text-white">
                <div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
                
                {/* Hover Effect */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

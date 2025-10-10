import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
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
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-purple font-medium tracking-wide uppercase text-sm mb-4">- Projects</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-navy mb-6">Recent Completed Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-purple text-sm font-medium uppercase tracking-wide mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-navy mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 bg-purple/10 text-purple text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" variant="outline" className="text-lg px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

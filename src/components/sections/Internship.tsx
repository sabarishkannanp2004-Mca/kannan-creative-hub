const Internship = () => {
  return (
    <section id="internship" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-purple font-medium tracking-wide uppercase text-sm mb-4">- Experience</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-navy mb-6">Internship</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience that shaped my journey as a developer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-2 animate-scale-in">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/C4D0BAQHxG7VqPQk0oA/company-logo_200_200/company-logo_200_200/0/1630557413803/pumo_technovation_logo?e=2147483647&v=beta&t=5vKCLqvLqxQZXqJY8JxY8lqZqJqZqJqZqJqZqJqZqJo"
                    alt="Pumo Technovation"
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/80x80/6366f1/ffffff?text=PUMO";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">Full Stack Developer Intern</h3>
                  <p className="text-purple font-semibold text-lg mb-1">Pumo Technovation</p>
                  <p className="text-muted-foreground">6 Months</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <span className="text-purple mt-1 flex-shrink-0">•</span>
                  <span>Developed and maintained full-stack web applications using modern technologies</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-purple mt-1 flex-shrink-0">•</span>
                  <span>Collaborated with cross-functional teams to deliver high-quality solutions</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-purple mt-1 flex-shrink-0">•</span>
                  <span>Gained hands-on experience with React, Node.js, and database management</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-purple mt-1 flex-shrink-0">•</span>
                  <span>Participated in code reviews and learned industry best practices</span>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "JavaScript", "CSS", "Git", "Agile"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-purple/10 text-purple text-sm font-medium rounded-full"
                    >
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

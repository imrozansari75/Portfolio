const Projects = () => {

  const projects = [
    {
      title: "Fitness Club Website",
      description:
        "A modern and responsive fitness website designed to promote health programs and gym memberships. The site features smooth navigation, informative sections about trainers, programs, testimonials, and pricing plans. It is optimized for performance and built using semantic HTML, clean CSS, and JavaScript to enhance interactivity.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://github.com/imrozansari75/The-Fit-Club",
      githubLink: "https://github.com/imrozansari75/The-Fit-Club",
    },
    {
      title: "Stock Market Card",
      description:
        "An interactive card component that fetches and displays real-time stock market data, built with React and Chart.js. It visualizes stock performance through dynamic charts and provides up-to-date market trends in a sleek, responsive UI. Ideal for dashboards or financial platforms where users need quick access to data insights.",
      technologies: ["React.js", "Tailwind CSS", "Chart.js"],
      demoLink: "https://github.com/imrozansari75/Stock-Cards",
      githubLink: "https://github.com/imrozansari75/Stock-Cards",
    },
  ];



  return (
    <section id="projects" className="flex flex-col py-10 px-4 text-white max-w-6xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-8">My Jobs</h2>

        <div className="px-0 rounded-2xl shadow-lg flex gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-transparent hover:bg-black/50 transition hover:scale-105 duration-300 border border-black/40 p-6 rounded-3xl space-y-4"
            >
              {/* Title */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-200 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-black/30 px-3 py-1 text-xs text-white rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              {project.githubLink && (
                <div className="pt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 
                11.385.6.113.793-.26.793-.577v-2.04c-3.338.726-4.033-1.61-4.033-1.61-.546
                -1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 
                1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 
                3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 
                0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.527.117-3.176 
                0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 
                1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 
                3.296-1.23.653 1.649.242 2.873.119 3.176.77.84 1.233 
                1.911 1.233 3.221 0 4.609-2.807 5.624-5.479 
                5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 
                21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    View Code
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
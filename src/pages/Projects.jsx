import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React.js", "Tailwind CSS", "Chart.js", "Firebase"],
      demoLink: "https://example.com/demo1",
      githubLink: "https://github.com/username/project1",
    },
    {
      title: "Social Media App",
      description:
        "A responsive social media application with features like user authentication, real-time messaging, post creation, and notifications.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      demoLink: "https://example.com/demo2",
      githubLink: "https://github.com/username/project2",
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather application that provides current conditions and 5-day forecasts for any location, with beautiful visualizations and responsive design.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React.js", "Tailwind CSS", "OpenWeather API"],
      demoLink: "https://example.com/demo3",
      githubLink: "https://github.com/username/project3",
    },
  ]

  return (

    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-left font-bold mb-2">My Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="bg-black/40 rounded-xl h-full flex flex-col overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                </div>
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <h2 key={tech} variant="secondary">
                        {tech}
                      </h2>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0 flex justify-between">
                  <button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <FaExternalLinkAlt className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </button>
                  <button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <FaGithub className="mr-2 h-4 w-4" /> Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
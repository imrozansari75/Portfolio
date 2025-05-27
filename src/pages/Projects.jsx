import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink} from 'react-icons/fi'
import StockImg from '../assets/stocks.png'
import WeatherImg from '../assets/weather.png'

const Projects = () => {

  const projects = [
    {
      title: "Fitness Club Website",
      description:
        "A responsive fitness club website showcasing various fitness programs, trainers, and membership plans.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://github.com/imrozansari75/The-Fit-Club",
      githubLink: "https://github.com/imrozansari75/The-Fit-Club",
    },
    {
      title: "Stock Market Card",
      description:
        "A dynamic card component displaying real-time stock market data with interactive charts.",
      image: StockImg,
      technologies: ["React.js", "Tailwind CSS", "Chart.js"],
      demoLink: "https://github.com/imrozansari75/Stock-Cards",
      githubLink: "https://github.com/imrozansari75/Stock-Cards",
    },
    {
      title: "Weather App",
      description:
        "A web application providing current weather information for various locations using a weather API.",
      image: WeatherImg,
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      demoLink: "https://github.com/imrozansari75/Weather-App",
      githubLink: "https://github.com/imrozansari75/Weather-App",
    },
  ];


  return (

    <section id="projects" className="py-6 text-white">
      <div className="container mx-auto md:px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl text-left font-bold mb-2">My Projects</h2>
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
                  <h3 className="md:text-lg text-xl font-bold mb-2">{project.title}</h3>
                  <p className="md:text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap md:text-sm gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <h2 className="bg-black/40 px-2 py-1 md:px-4 rounded-xl" key={tech} variant="secondary">
                        {tech}
                      </h2>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0 flex justify-between">
                  <button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:text-white"
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <FiExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </button>
                  <button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:text-white"
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
import "../styles/projects.css"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with real-time data, forecasts, and location-based services.",
      tags: ["React", "API Integration", "Charts"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing projects and skills with smooth animations.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from "react"
import "../styles/projects.css"
import {Link} from "react-router-dom"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring a complete product catalog system, secure shopping cart functionality, and integrated Stripe payment processing. Includes user authentication, order tracking, inventory management, and admin dashboard for product management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project-1.jpg",
      link: "/projects/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      fullDescription: "A real-time collaborative task management application built with React and Firebase. Features include task creation and assignment, team collaboration, real-time updates, deadline tracking, and progress monitoring. Supports multiple team projects with granular permission controls.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "/project-2.jpg",
      link: "/projects/taskapp",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with real-time data, forecasts, and location-based services.",
      fullDescription: "An elegant weather application providing real-time weather data, 7-day forecasts, and location-based services. Features include weather alerts, historical data analysis, interactive weather charts, and a clean, responsive interface suitable for all devices.",
      tags: ["React", "API Integration", "Charts"],
      image: "/project-3.jpg",
      link: "/projects/weather",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing projects and skills with smooth animations.",
      fullDescription: "A modern, fully responsive portfolio website built with Next.js featuring smooth animations, interactive components, and optimized performance. Includes a project showcase, skills section, contact form, and blog integration for sharing development insights.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/project-4.jpg",
      link: "/projects/portfolio",
    },
  ]

  return (
    <>
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">Featured Projects</h2>
            <Link to="/projects" className="view-all-button">
              View All Projects →
            </Link>
          </div>

          <div className="projects-grid">
            {projects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />

            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.fullDescription}</p>

              <div className="modal-tags">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="modal-actions">
                <Link to={`${selectedProject.link}?from=home`} className="modal-button details-button">
                  View Details
                </Link>
                <Link to="/projects" className="modal-button projects-button">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

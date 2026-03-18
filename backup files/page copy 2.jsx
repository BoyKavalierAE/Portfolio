import { useState } from "react"
import {Link} from "react-router-dom"
import "./projects-page.css"

export default function AllProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  const allProjects = [
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
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Advanced analytics platform for tracking social media metrics and engagement.",
      fullDescription: "A powerful analytics dashboard for monitoring social media performance across multiple platforms. Provides real-time data visualization, engagement metrics, follower trends, and actionable insights for optimizing your social media strategy.",
      tags: ["React", "D3.js", "Node.js"],
      image: "/project-5.jpg",
      link: "/projects/analytics",
    },
    {
      id: 6,
      title: "Mobile Fitness App",
      description: "iOS and Android fitness application with workout tracking and progress monitoring.",
      fullDescription: "A comprehensive fitness application available on iOS and Android, featuring workout tracking, personalized training plans, progress monitoring, and community challenges. Includes integration with popular fitness wearables and detailed performance analytics.",
      tags: ["React Native", "Firebase", "Redux"],
      image: "/project-6.jpg",
      link: "/projects/fitness",
    },
  ]

  return (
    <main className="all-projects-page">
      <div className="projects-header">
        <Link to="/" className="back-link">← Back Home</Link>
        <h1 className="page-title">All Projects</h1>
        <p className="page-subtitle">Explore my complete portfolio of work and achievements</p>
      </div>

      <div className="projects-page-container">
        <div className="projects-page-grid">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="project-page-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-page-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-page-image"
                />
              </div>
              <div className="project-page-content">
                <h3 className="project-page-title">{project.title}</h3>
                <p className="project-page-description">{project.description}</p>
                <div className="project-page-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-page-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                <Link to={`${selectedProject.link}?from=projects`} className="modal-button details-button">
                  View Details
                </Link>
                <button
                  className="modal-button close-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

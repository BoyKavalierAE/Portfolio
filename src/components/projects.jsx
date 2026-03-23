import "../styles/projects.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "PROJECTS"));

        const projectList = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            title: data.title || "Untitled Project",
            description: data.description || "No description available.",
            fullDescription:
              data.fullDescription || "No additional details provided.",
            image: data.image || "/placeholder.jpeg", // add a default image in public/
            tags: Array.isArray(data.tags) ? data.tags : [],
          };
        });

        setProjects(projectList);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

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
                    src={project.image || "/placeholder.jpeg"}
                    alt={project.title || "Project image"}
                    className="project-image"
                    onError={(e) => (e.target.src = "/placeholder.jpeg")}
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {(project.tags || []).map((tag, i) => (
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
              src={selectedProject.image || "/placeholder.jpeg"}
              alt={selectedProject.title || "Project image"}
              className="modal-image"
              onError={(e) => (e.target.src = "/placeholder.jpeg")}
            />

            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">
                {selectedProject.fullDescription}
              </p>

              <div className="modal-tags">
                {(selectedProject.tags || []).map((tag, i) => (
                  <span key={i} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="modal-actions">
                <Link
                  to={`/projects/${selectedProject.id}?from=home`}
                  className="modal-button details-button"
                >
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
  );
}

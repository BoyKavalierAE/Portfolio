import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useParams } from "react-router-dom";
import "./projects-page.css";

export default function AllProjectsPage() {
  const { id } = useParams(); // optional: doc ID from URL
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all projects for the grid
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "PROJECTS"));
        const projectList = querySnapshot.docs.map((doc) => ({
          id: doc.id, // doc ID (like "portfolio")
          ...doc.data(),
        }));
        setProjects(projectList);
        setLoading(false);

        // If URL has id param, select that project automatically
        if (id) {
          const projectFromUrl = projectList.find((p) => p.id === id);
          if (projectFromUrl) setSelectedProject(projectFromUrl);
          else console.error("Project not found in Firestore:", id);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [id]);

  // if (loading) return <p>Loading projects...</p>;

  return (
    <main className="all-projects-page">
      <div className="projects-header">
        <Link to="/" className="back-link">
          ← Back Home
        </Link>
        <h1 className="page-title">All Projects</h1>
        <p className="page-subtitle">
          Explore my complete portfolio of work and achievements
        </p>
      </div>

      <div className="projects-page-container">
        <div className="projects-page-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-page-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-page-image-wrapper">
                <img
                  src={project.image || "/placeholder.jpeg"}
                  alt={project.title || "Project image"}
                  className="project-page-image"
                  onError={(e) => (e.target.src = "/placeholder.jpeg")}
                />
              </div>

              <div className="project-page-content">
                <h3 className="project-page-title">{project.title}</h3>
                <p className="project-page-description">
                  {project.description}
                </p>

                <div className="project-page-tags">
                  {Array.isArray(project.tags) &&
                    project.tags.map((tag, i) => (
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

      {/* Modal for selected project */}
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
                {Array.isArray(selectedProject.tags) &&
                  selectedProject.tags.map((tag, i) => (
                    <span key={i} className="modal-tag">
                      {tag}
                    </span>
                  ))}
              </div>

              <div className="modal-actions">
                <Link
                  to={`/projects/${selectedProject.id}?from=projects`} // project.id is Firestore doc ID ("portfolio")
                  className="modal-button details-button"
                >
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
  );
}

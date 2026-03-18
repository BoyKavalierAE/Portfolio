import { useParams, useSearchParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import "./project-details.css"

export default function ProjectDetail() {

  const { id } = useParams()
  const [searchParams] = useSearchParams()

  const from = searchParams.get("from") || "home"
  const backLink = from === "projects" ? "/projects" : "/#projects"
  const backText = from === "projects" ? "← Back to All Projects" : "← Back Home"

  const [project, setProject] = useState(null)

  useEffect(() => {

    async function fetchProject() {

      try {

        const docRef = doc(db, "PROJECTS", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProject(docSnap.data())
        } else {
          console.log("Project not found:", id)
        }

      } catch (err) {
        console.error(err)
      }

    }

    fetchProject()

  }, [id])

  if (!project) return <p>Loading...</p>

  return (
    <main className="project-detail-page">

      <div className="detail-header">
        <Link to={backLink} className="back-link">
          {backText}
        </Link>
      </div>

      <div className="detail-container">

        <div className="detail-hero">
          <img
            src={project.image}
            alt={project.title}
            className="detail-image"
          />
        </div>

        <article className="detail-content">

          <h1 className="detail-title">{project.title}</h1>

          <p className="detail-subtitle">
            {project.subtitle}
          </p>

          {/* Project Overview */}
          <section className="detail-section">
            <h2>Project Overview</h2>

            {project.overview?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

          </section>

          {/* Features */}
          <section className="detail-section">
            <h2>Key Features</h2>

            <ul className="features-list">
              {project.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

          </section>

          {/* Technologies */}
          <section className="detail-section">
            <h2>Technologies Used</h2>

            <div className="tech-stack">

              {project.technologies?.map((tech, i) => (
                <div key={i} className="tech-card">
                  <h3>{tech.title}</h3>
                  <p>{tech.description}</p>
                </div>
              ))}

            </div>

          </section>

          {/* Challenges */}
          <section className="detail-section">
            <h2>Challenges & Solutions</h2>

            {project.challenges?.map((challenge, i) => (
              <div key={i} className="challenge-item">

                <h3>Challenge: {challenge.title}</h3>

                <p>{challenge.problem}</p>

                <p className="solution">
                  <strong>Solution:</strong> {challenge.solution}
                </p>

              </div>
            ))}

          </section>

          {/* Results */}
          <section className="detail-section">
            <h2>Results & Impact</h2>

            <p>{project.results}</p>

          </section>

          <div className="detail-cta">
            <p>Need analytics for your social media or business?</p>

            <Link to="/#contact" className="cta-button">
              Get in Touch
            </Link>

          </div>

        </article>

      </div>

    </main>
  )
}
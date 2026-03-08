import { useSearchParams } from "react-router-dom"
import {Link} from "react-router-dom"
import "../project-details.css"

export default function TaskAppProjectPage() {
  const [searchParams] = useSearchParams()
  const from = searchParams.get("from") || "home"
  const backLink = from === "projects" ? "/projects" : "/#projects"
  const backText = from === "projects" ? "← Back to All Projects" : "← Back Home"

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
            src="/project-2.jpg"
            alt="Task Management App"
            className="detail-image"
          />
        </div>

        <article className="detail-content">
          <h1 className="detail-title">Task Management App</h1>
          <p className="detail-subtitle">
            Collaborative task management with real-time updates
          </p>

          <section className="detail-section">
            <h2>Project Overview</h2>
            <p>
              A modern collaborative task management application built with React and Firebase. This tool enables teams to work together efficiently with real-time synchronization, ensuring everyone stays on the same page.
            </p>
            <p>
              The app supports task creation and assignment, team collaboration, real-time updates, deadline tracking, and progress monitoring. Users can organize projects, assign tasks to team members, and track completion progress with interactive dashboards.
            </p>
          </section>

          <section className="detail-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              <li>Real-time task synchronization across all users</li>
              <li>Multiple project support with team collaboration</li>
              <li>Task creation, assignment, and tracking</li>
              <li>Deadline management and reminders</li>
              <li>Progress monitoring and analytics</li>
              <li>Granular permission controls for team members</li>
              <li>Comment and attachment support for tasks</li>
              <li>Mobile-responsive design</li>
            </ul>
          </section>

          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <div className="tech-card">
                <h3>Frontend</h3>
                <p>React with real-time state management</p>
              </div>
              <div className="tech-card">
                <h3>Backend</h3>
                <p>Firebase with Firestore for real-time updates</p>
              </div>
              <div className="tech-card">
                <h3>Styling</h3>
                <p>Modern CSS with responsive design patterns</p>
              </div>
              <div className="tech-card">
                <h3>Authentication</h3>
                <p>Firebase Authentication for secure user management</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Challenges & Solutions</h2>
            <div className="challenge-item">
              <h3>Challenge: Real-time Synchronization</h3>
              <p>
                Keeping task data synchronized across multiple users in real-time while handling concurrent updates presented significant challenges.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Leveraged Firebase's real-time database capabilities with proper conflict resolution strategies to ensure data consistency and instant updates.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Challenge: Performance at Scale</h3>
              <p>
                Managing performance when teams have hundreds of tasks across multiple projects required optimization.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Implemented efficient filtering, pagination, and lazy loading to keep the app responsive even with large datasets.
              </p>
            </div>
          </section>

          <section className="detail-section">
            <h2>Results & Impact</h2>
            <p>
              Teams using this application report a 35% improvement in project completion times and better communication overall. The real-time updates eliminate the need for status update meetings, allowing teams to focus on actual work.
            </p>
          </section>

          <div className="detail-cta">
            <p>Want to improve your team's productivity?</p>
            <Link to="/#contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}

import { useSearchParams } from "react-router-dom"
import {Link} from "react-router-dom"
import "../project-details.css"

export default function AnalyticsProjectPage() {
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
            src="/project-5.jpg"
            alt="Social Media Analytics"
            className="detail-image"
          />
        </div>

        <article className="detail-content">
          <h1 className="detail-title">Social Media Analytics</h1>
          <p className="detail-subtitle">
            Advanced analytics platform for tracking social media metrics
          </p>

          <section className="detail-section">
            <h2>Project Overview</h2>
            <p>
              A powerful analytics dashboard for monitoring social media performance across multiple platforms. This comprehensive platform provides real-time data visualization, engagement metrics, follower trends, and actionable insights for optimizing your social media strategy.
            </p>
            <p>
              The application connects to major social media platforms, aggregates data, and presents it in an intuitive interface with detailed analytics and trend analysis.
            </p>
          </section>

          <section className="detail-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              <li>Multi-platform social media integration</li>
              <li>Real-time engagement metrics and analytics</li>
              <li>Follower trend tracking and analysis</li>
              <li>Interactive data visualizations and charts</li>
              <li>Actionable insights and recommendations</li>
              <li>Campaign performance tracking</li>
              <li>Audience demographics and behavior analysis</li>
              <li>Custom reports and exports</li>
            </ul>
          </section>

          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <div className="tech-card">
                <h3>Frontend</h3>
                <p>React for building interactive dashboards</p>
              </div>
              <div className="tech-card">
                <h3>Data Visualization</h3>
                <p>D3.js for powerful, custom data visualizations</p>
              </div>
              <div className="tech-card">
                <h3>Backend</h3>
                <p>Node.js with Express for API and data processing</p>
              </div>
              <div className="tech-card">
                <h3>Database</h3>
                <p>MongoDB for flexible data storage and analysis</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Challenges & Solutions</h2>
            <div className="challenge-item">
              <h3>Challenge: Multi-Platform Integration</h3>
              <p>
                Integrating with multiple social media APIs with different rate limits and data formats was complex.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Built a robust abstraction layer that normalizes data from different platforms and manages API rate limits intelligently.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Challenge: Real-Time Data Processing</h3>
              <p>
                Processing and displaying real-time data updates for hundreds of social media accounts required efficient infrastructure.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Implemented WebSocket connections and optimized database queries to handle real-time updates smoothly.
              </p>
            </div>
          </section>

          <section className="detail-section">
            <h2>Results & Impact</h2>
            <p>
              Users report 50% improvement in decision-making regarding their social media strategies. The platform helps content creators and businesses optimize their posting schedules, content types, and engagement strategies based on data-driven insights.
            </p>
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

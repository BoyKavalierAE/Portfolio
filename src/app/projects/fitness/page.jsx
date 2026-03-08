import { useSearchParams } from "react-router-dom"
import {Link} from "react-router-dom"
import "../project-details.css"

export default function FitnessProjectPage() {
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
            src="/project-6.jpg"
            alt="Mobile Fitness App"
            className="detail-image"
          />
        </div>

        <article className="detail-content">
          <h1 className="detail-title">Mobile Fitness App</h1>
          <p className="detail-subtitle">
            iOS and Android fitness application with workout tracking and progress monitoring
          </p>

          <section className="detail-section">
            <h2>Project Overview</h2>
            <p>
              A comprehensive fitness application available on iOS and Android, featuring workout tracking, personalized training plans, progress monitoring, and community challenges. The app integrates with popular fitness wearables and provides detailed performance analytics.
            </p>
            <p>
              Users can create custom workout routines, track their progress over time, connect with friends for accountability, and participate in community challenges for additional motivation.
            </p>
          </section>

          <section className="detail-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              <li>Comprehensive workout tracking and logging</li>
              <li>Personalized training plan recommendations</li>
              <li>Progress monitoring with detailed analytics</li>
              <li>Integration with popular fitness wearables</li>
              <li>Social features and friend connectivity</li>
              <li>Community challenges and competitions</li>
              <li>Nutrition tracking and meal planning</li>
              <li>Push notifications for reminders and achievements</li>
            </ul>
          </section>

          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <div className="tech-card">
                <h3>Framework</h3>
                <p>React Native for iOS and Android development</p>
              </div>
              <div className="tech-card">
                <h3>Backend</h3>
                <p>Firebase for real-time database and authentication</p>
              </div>
              <div className="tech-card">
                <h3>State Management</h3>
                <p>Redux for predictable state management</p>
              </div>
              <div className="tech-card">
                <h3>Integrations</h3>
                <p>Wearable APIs and health platform integrations</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Challenges & Solutions</h2>
            <div className="challenge-item">
              <h3>Challenge: Cross-Platform Consistency</h3>
              <p>
                Maintaining consistent functionality and UI/UX across iOS and Android platforms with different design guidelines and capabilities.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Used React Native for code sharing while implementing platform-specific optimizations for iOS and Android native feel.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Challenge: Wearable Integration</h3>
              <p>
                Integrating with multiple fitness wearable devices with different APIs and data formats required careful implementation.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Built an abstraction layer for different wearable APIs and implemented background sync to collect and synchronize fitness data.
              </p>
            </div>
          </section>

          <section className="detail-section">
            <h2>Results & Impact</h2>
            <p>
              The fitness app has been downloaded over 100,000 times with a 4.8-star rating on app stores. Users report improved fitness consistency and achievement of their health goals. The community features have created an engaged and motivating user base.
            </p>
          </section>

          <div className="detail-cta">
            <p>Ready to build your fitness app or mobile solution?</p>
            <Link to="/#contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}

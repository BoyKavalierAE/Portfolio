import { useSearchParams } from "react-router-dom"
import {Link} from "react-router-dom"
import "../project-details.css"

export default function WeatherProjectPage() {
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
            src="/project-3.jpg"
            alt="Weather Dashboard"
            className="detail-image"
          />
        </div>

        <article className="detail-content">
          <h1 className="detail-title">Weather Dashboard</h1>
          <p className="detail-subtitle">
            Beautiful weather application with real-time data and forecasts
          </p>

          <section className="detail-section">
            <h2>Project Overview</h2>
            <p>
              An elegant weather application providing real-time weather data, comprehensive 7-day forecasts, and location-based services. The application features a clean, intuitive interface that works seamlessly across all devices.
            </p>
            <p>
              Users can track weather for multiple locations, receive weather alerts, analyze historical data, and view interactive weather charts. The application is built with performance and user experience as top priorities.
            </p>
          </section>

          <section className="detail-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              <li>Real-time weather data with current conditions</li>
              <li>7-day weather forecasts with hourly breakdowns</li>
              <li>Location-based services using geolocation API</li>
              <li>Multiple location tracking and management</li>
              <li>Weather alert notifications</li>
              <li>Historical weather data analysis</li>
              <li>Interactive weather charts and visualizations</li>
              <li>Responsive design for all devices</li>
            </ul>
          </section>

          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <div className="tech-card">
                <h3>Frontend</h3>
                <p>React for building interactive UI components</p>
              </div>
              <div className="tech-card">
                <h3>APIs</h3>
                <p>Integration with Weather API and Geolocation services</p>
              </div>
              <div className="tech-card">
                <h3>Charting</h3>
                <p>Recharts for beautiful weather data visualization</p>
              </div>
              <div className="tech-card">
                <h3>Styling</h3>
                <p>Modern CSS with responsive design patterns</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Challenges & Solutions</h2>
            <div className="challenge-item">
              <h3>Challenge: API Rate Limiting</h3>
              <p>
                Weather APIs have rate limits that need careful management, especially when users track multiple locations.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Implemented smart caching strategies and batched API requests to minimize API calls while keeping data fresh.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Challenge: Data Visualization</h3>
              <p>
                Presenting weather data in an intuitive and visually appealing manner required careful design considerations.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Used Recharts library combined with custom styling to create beautiful, interactive weather visualizations.
              </p>
            </div>
          </section>

          <section className="detail-section">
            <h2>Results & Impact</h2>
            <p>
              The weather application has been downloaded thousands of times with consistently high user ratings. Users appreciate the clean interface and accurate, timely weather information. The app maintains fast load times even with complex data visualizations.
            </p>
          </section>

          <div className="detail-cta">
            <p>Need a weather app or similar data visualization project?</p>
            <Link to="/#contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}

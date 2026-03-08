import { useSearchParams } from "react-router-dom"
import {Link} from "react-router-dom"
import "../project-details.css"

export default function PortfolioProjectPage() {
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
            src="/project-4.jpg"
            alt="Portfolio Website"
            className="detail-image"
          />
        </div>

        <article className="detail-content">
          <h1 className="detail-title">Portfolio Website</h1>
          <p className="detail-subtitle">
            Modern portfolio website with smooth animations and optimized performance
          </p>

          <section className="detail-section">
            <h2>Project Overview</h2>
            <p>
              A modern, fully responsive portfolio website built with Next.js featuring smooth animations, interactive components, and optimized performance. This portfolio serves as a complete showcase of skills, projects, and achievements.
            </p>
            <p>
              The website includes comprehensive project showcase, detailed skills section, contact form for inquiries, and blog integration for sharing development insights and industry knowledge.
            </p>
          </section>

          <section className="detail-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              <li>Fully responsive design for all devices</li>
              <li>Smooth scroll animations and transitions</li>
              <li>Interactive project showcase with modals</li>
              <li>Comprehensive skills and expertise section</li>
              <li>Contact form with email integration</li>
              <li>Blog section for sharing insights</li>
              <li>SEO optimized for search engines</li>
              <li>Performance optimized for fast loading</li>
            </ul>
          </section>

          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <div className="tech-card">
                <h3>Framework</h3>
                <p>Next.js for optimized performance and SEO</p>
              </div>
              <div className="tech-card">
                <h3>Styling</h3>
                <p>Modern CSS with responsive design patterns</p>
              </div>
              <div className="tech-card">
                <h3>Animations</h3>
                <p>Framer Motion for smooth, delightful interactions</p>
              </div>
              <div className="tech-card">
                <h3>Hosting</h3>
                <p>Deployed on Vercel for optimal performance</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Challenges & Solutions</h2>
            <div className="challenge-item">
              <h3>Challenge: Performance Optimization</h3>
              <p>
                Creating a visually rich portfolio with animations while maintaining fast loading times was critical.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Leveraged Next.js image optimization, code splitting, and lazy loading to ensure excellent Core Web Vitals scores.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Challenge: SEO for Portfolios</h3>
              <p>
                Ensuring the portfolio is discoverable by search engines while maintaining interactive features required careful optimization.
              </p>
              <p className="solution">
                <strong>Solution:</strong> Used Next.js built-in SEO features with proper meta tags, structured data, and server-side rendering to maximize search visibility.
              </p>
            </div>
          </section>

          <section className="detail-section">
            <h2>Results & Impact</h2>
            <p>
              This portfolio has significantly increased professional opportunities and client inquiries. The smooth, modern design creates a lasting impression while the optimized performance ensures visitors stay engaged. The site consistently achieves 95+ Lighthouse scores.
            </p>
          </section>

          <div className="detail-cta">
            <p>Want a portfolio website that stands out?</p>
            <Link to="/#contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}

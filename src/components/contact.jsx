import "../styles/contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Interested in collaborating? I'd love to hear about your project. Feel free to reach out!
          </p>
        </div>

        <div className="contact-buttons">
          <a href="mailto:youremail@example.com" className="btn btn-primary">
            Send Email
          </a>
          <a href="#" className="btn btn-secondary">
            LinkedIn
          </a>
        </div>

        <div className="contact-social">
          <p className="contact-social-label">Or connect with me on social media</p>
          <div className="social-links">
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

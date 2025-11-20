import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Alex's Portfolio. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Privacy
          </a>
          <a href="#" className="footer-link">
            Terms
          </a>
          <a href="#" className="footer-link">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  )
}

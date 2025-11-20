import "../styles/about.css"

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer specializing in building beautiful, functional web applications using React
              and modern web technologies. With a focus on clean code and user experience, I transform ideas into
              engaging digital solutions.
            </p>
            <p>
              My journey in web development has taught me that great websites aren't just about aesthetics—they're about
              creating seamless experiences that solve real problems for users.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <p className="stat-label">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

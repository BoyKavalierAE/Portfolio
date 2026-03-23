import "../styles/skills.css";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vite", "HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Firebase", "PHP", "MySQL", "Java", "Python", "Flask"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Docker", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

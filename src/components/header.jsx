import { useState, useEffect } from "react";
import "../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="header">
      <nav className="header-nav">
        <a href="/" className="header-logo">
          Matt
        </a>

        {/* Desktop Navigation */}
        <div className="header-nav-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        {/* Theme Toggle Button */}
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
            aria-label="Toggle theme"
          />
          <span className="slider"></span>

          <img
            src="/off.jpg"
            className="off"
            alt="Dark mode"
          />

          <img
            src="/on.jpg"
            className="on"
            alt="Light mode"
          />
        </label>
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="header-menu-btn">
          <svg
            className="menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="header-nav-mobile">
            <div className="mobile-nav-content">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

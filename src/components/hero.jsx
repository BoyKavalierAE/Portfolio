import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa"; // PDF icon
import { FaDownload } from "react-icons/fa"; // download icon
import "../styles/hero.css";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("photo");

  const tabData = {
    photo: { url: "gyver-portfolio.io" },
    resume: { url: "resume.pdf" },
  };

  return (
    <section className="hero">
      {/* Background gradient effect */}
      <div className="hero-bg-gradient" />

      <div className="hero-container">
        <div className="hero-content">
          {/* Text content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Gyver</span>
            </h1>
            <p className="hero-subtitle">
              Web Developer crafting beautiful, responsive, and user- <br></br>
              friendly digital experiences
            </p>
          </div>

          {/* Browser-style card replaces image */}
          <div className="browser-card">
            {/* Tabs Header */}
            <div className="tabs-head">
              <div className="tabs">
                <div
                  className={`tab-open ${
                    activeTab === "photo" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("photo")}
                >
                  <div className="rounded-r">
                    <div className="mask-round"></div>
                  </div>

                  <span>Profile</span>

                  <div className="rounded-l">
                    <div className="mask-round"></div>
                  </div>

                  <div className="close-tab">✕</div>
                </div>

                <div
                  className={`tab-open ${
                    activeTab === "resume" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("resume")}
                >
                  <div className="rounded-r">
                    <div className="mask-round"></div>
                  </div>

                  <span>Resume</span>

                  <div className="rounded-l">
                    <div className="mask-round"></div>
                  </div>

                  <div className="close-tab">✕</div>
                </div>
              </div>

              <div className="window-opt">
                <button>-</button>
                <button>□</button>
                <button className="window-close">✕</button>
              </div>
            </div>

            {/* Browser Navigation */}
            <div className="head-browser">
              <button className="nav-left">🡰</button>
              <button className="nav-right">🡲</button>
              <button className="nav-reload">⟳</button>
              <input type="text" value={tabData[activeTab].url} readOnly />
              <button className="star">✰</button>
              <button className="menu">⋮</button>
            </div>

            {/* Browser Content */}
            <div className="browser-content">
              {activeTab === "photo" ? (
                <div className="hero-image-wrapper">
                  <div className="hero-image-frame">
                    {/* Gold border frame */}
                    <div className="hero-image-border">
                      <div className="hero-image-container">
                        <img
                          src="src\public\professional-headshot.png"
                          alt="Alex's profile picture"
                          className="hero-image"
                        />
                      </div>
                    </div>
                    <div className="hero-image-glow" />
                  </div>
                </div>
              ) : (
                <div className="resume-mockup">
                  {/* Toolbar stays the same */}
                  <div className="pdf-toolbar">
                    <div className="left-tools">
                      <span className="tool-btn">☰</span>
                      <span className="file-name">File name</span>
                    </div>

                    <div className="center-tools">
                      {/* <span className="tool-btn">←</span>
                      <span className="tool-btn">→</span> */}
                      <span className="page-indicator">1 / 2</span>
                      <span className="tool-btn">|</span>
                      <span className="tool-btn">＋</span>
                      <span className="zoom">100%</span>
                      <span className="tool-btn">－</span>
                      <span className="tool-btn">|</span>
                    </div>

                    <div className="right-tools">
                      <span className="tool-btn">⋮</span>
                    </div>
                  </div>

                  {/* Full-page document */}
                  <div className="pdf-page">
                    <div className="pdf-inner-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas pretium tristique nisi at maximus. Duis nec nisl
                      eget nibh mattis pharetra...
                      <br />
                      <br />
                      {/* Download button MOVED TO BOTTOM */}
                      <button
                        className="pdf-download-bottom"
                        onClick={() => (window.location.href = "/resume.pdf")}
                      >
                        <FaFilePdf size={18} />
                        <span>Download PDF</span>
                        <FaDownload size={16} className="pdf-download-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Buttons (unchanged) */}
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator (unchanged) */}
        <div className="hero-scroll-indicator">
          <svg
            className="scroll-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

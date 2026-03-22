import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

import ProjectsPage from "./app/projects/page";
import ProjectDetail from "./app/projects/ProjectDetail";

import ScrollToTop from "./components/ScrollToTop";

/* ✅ NEW: Scroll to hash */
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // small delay ensures DOM is ready
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      {/* existing scroll reset */}
      <ScrollToTop />

      {/* ✅ NEW: handles #about, #projects, etc */}
      <ScrollToHash />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<ProjectsPage />} />

          {/* Dynamic project page */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

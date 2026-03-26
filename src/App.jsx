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
    if (!hash) return;

    let intervalId = setInterval(() => {
      const el = document.querySelector(hash);
      if (el) {
        const headerOffset = 80; // adjust to your header height
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        clearInterval(intervalId);
      }
    }, 200); // check every 200ms until element exists

    // Cleanup in case component unmounts
    return () => clearInterval(intervalId);
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

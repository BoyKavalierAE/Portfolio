import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

import ProjectsPage from "./app/projects/page";
import Ecommerce from "./app/projects/ecommerce/page";
import TaskApp from "./app/projects/taskapp/page";
import Weather from "./app/projects/weather/page";
import Portfolio from "./app/projects/portfolio/page";
import Analytics from "./app/projects/analytics/page";
import Fitness from "./app/projects/fitness/page";
import ScrollToTop from "./components/ScrollToTop";

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
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/ecommerce" element={<Ecommerce />} />
          <Route path="/projects/taskapp" element={<TaskApp />} />
          <Route path="/projects/weather" element={<Weather />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route path="/projects/analytics" element={<Analytics />} />
          <Route path="/projects/fitness" element={<Fitness />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy Load heavy/below-fold components
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Certificates = lazy(() => import("./components/Certificates"));
import { PROJECTS } from "./components/Projects"; // Import data for preloading
import { CERTIFICATES } from "./components/Certificates"; // Import data for preloading

const About = lazy(() => import("./components/About"));
const DataStudent = lazy(() => import("./components/DataStudent"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  // Premium Preloading Strategy (Gentle / Non-Blocking)
  useEffect(() => {
    const allImages = [
      ...PROJECTS.map((p) => p.image),
      ...CERTIFICATES.map((c) => c.image),
    ];

    const loadImage = (index) => {
      if (index >= allImages.length) return;

      const img = new Image();
      img.src = allImages[index];

      // Load next only after this one triggers or fails
      // using idle callback to avoid freezing the UI
      img.onload = () => scheduleNext(index + 1);
      img.onerror = () => scheduleNext(index + 1);
    };

    const scheduleNext = (index) => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => loadImage(index));
      } else {
        setTimeout(() => loadImage(index), 200);
      }
    };

    // Initial delay to prioritize LCP (Hero Render)
    setTimeout(() => scheduleNext(0), 3000);
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Projects />
          <Experience />
          <Certificates />
          <About />
          <DataStudent />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;

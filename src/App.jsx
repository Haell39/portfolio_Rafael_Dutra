import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy Load heavy/below-fold components
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Certificates = lazy(() => import("./components/Certificates"));
const About = lazy(() => import("./components/About"));
const DataStudent = lazy(() => import("./components/DataStudent"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
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

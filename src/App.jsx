import { lazy, Suspense } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const ProfessionalCases = lazy(() => import("./components/ProfessionalCases"));
const About = lazy(() => import("./components/About"));
const Solutions = lazy(() => import("./components/Solutions"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Process = lazy(() => import("./components/Process"));
const Certificates = lazy(() => import("./components/Certificates"));
const FAQ = lazy(() => import("./components/FAQ"));
const DiagnosisCTA = lazy(() => import("./components/DiagnosisCTA"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <LanguageProvider>
      <div className="site-shell">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <ProfessionalCases />
            <About />
            <Solutions />
            <Experience />
            <Projects />
            <Process />
            <Certificates />
            <FAQ />
            <DiagnosisCTA />
          </Suspense>
        </main>
        <Suspense fallback={null}><Footer /></Suspense>
      </div>
    </LanguageProvider>
  );
}

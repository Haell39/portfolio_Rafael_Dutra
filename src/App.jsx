import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import DataStudent from "./components/DataStudent";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <DataStudent />
        <Contact />
      </main>
    </div>
  );
}

export default App;

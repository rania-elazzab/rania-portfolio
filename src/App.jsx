import { useScrollEffects } from "./hooks/useScrollEffects";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const activeSection = useScrollEffects();

  return (
    <div className="site">
      <Loader />
      <ScrollProgress />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Services />
        <WhyMe />
        <Projects />
        <Education />
        <Approach />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

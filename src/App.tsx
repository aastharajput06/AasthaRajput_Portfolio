import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Experience from "../src/components/Experience";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

const App = () => {
  return (
    <div className="flex">
      <div className="fixed w-1/4 h-screen">
        <Navbar />
      </div>
      <div className="w-3/4 ml-[25%]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
export default App;
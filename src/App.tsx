import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Experience from "../src/components/Experience";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

const App = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-4 mx-auto">
      <Navbar />
      </div>
      
      <div className="col-span-6">
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

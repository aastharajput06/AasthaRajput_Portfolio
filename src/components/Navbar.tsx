import { Link } from "react-scroll";
import { motion } from "framer-motion";
import profile_pic from "../assets/profile_pic.png";

const Navbar = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };
  return (
    <nav className="fixed top-0 left-[20rem] h-screen w-1/4 flex flex-col items-center justify-between bg-[var(--background)] ">
      <div className="flex flex-col py-[2rem]">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-primary text-[4rem] font-bold hover:text-highlight transition-colors cursor-pointer"
        >
          Aastha Rajput
          <div className="text-[1.2rem] font-normal text-subtext">Software Engineer</div>
          <div className="flex items-center space-x-6">
            <motion.img
              src={profile_pic}
              alt="Aastha Rajput"
              className="w-1/2 rounded-full border border-primary my-[2rem]"
              {...fadeIn}
            /> </div>
        </Link>
        <div className="flex flex-col space-y-[2rem] ">
          {["about", "experience", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              <span className="nav-indicator"></span>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 pb-12">
        <a
          href="https://github.com/aastharajput06"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/aastharajput06/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
        <a
          href="mailto:aastha.rajput@gwmail.gwu.edu"
          className="social-icon"
        >
          <i className="fas fa-envelope text-2xl"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;






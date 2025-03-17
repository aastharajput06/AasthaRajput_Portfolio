import { Link } from "react-scroll";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-[5rem] left-0 h-screen w-1/4 flex flex-col items-center justify-between bg-transparent">
//       {/* Logo */}
//       <div className="flex flex-col items-center space-y-6">
//         <Link to="hero" smooth={true} duration={500} className="text-primary text-[3.5rem] font-bold hover:text-highlight transition-colors">
//           Aastha Rajput
//           <div className="text-[1.5rem]">Software Engineer</div>
//         </Link>

//         {/* Nav Links */}
//         <div className="flex flex-col space-y-6 my-12 ">
//           <Link to="about" smooth={true} duration={500} className="nav-link">
//             <span className="nav-indicator"></span> About
//           </Link>
//           <Link to="experience" smooth={true} duration={500} className="nav-link">
//             <span className="nav-indicator"></span> Experience
//           </Link>
//           <Link to="projects" smooth={true} duration={500} className="nav-link">
//             <span className="nav-indicator"></span> Projects
//           </Link>
//           <Link to="contact" smooth={true} duration={500} className="nav-link">
//             <span className="nav-indicator"></span> Contact
//           </Link>
//         </div>
//       </div>

//       {/* Social Icons */}
//       <div className="flex flex-col space-y-6">
//         <a href="https://www.linkedin.com/in/aastharajput06/" target="_blank" rel="noopener noreferrer" className="social-icon">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//         <a href="mailto:aastha.rajput@gwmail.gwu.edu" className="social-icon">
//           <i className="fas fa-envelope"></i>
//         </a>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-1/4 flex flex-col items-center justify-between bg-[var(--background)] border-r border-[var(--subtext)]/20">
      <div className="flex flex-col items-center space-y-8 pt-12">
        <Link to="hero" smooth={true} duration={500} className="text-primary text-[2.5rem] font-bold hover:text-highlight transition-colors">
          Aastha Rajput
          <div className="text-[1.2rem] font-normal text-subtext">Software Engineer</div>
        </Link>

        <div className="flex flex-col space-y-6">
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

      <div className="flex flex-col space-y-6 pb-12">
        <a href="https://www.linkedin.com/in/aastharajput06/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:aastha.rajput@gwmail.gwu.edu" className="social-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex flex-col justify-center pl-[30%]">
//       <h2 className="text-2xl font-bold text-highlight">About Me</h2>
//       <p className="mt-4 text-subtext max-w-2xl">
//         I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that seamlessly blend thoughtful design with robust engineering. My favorite work lies at the intersection of 
//         <span className="text-highlight"> design and development</span>, creating experiences that are not only visually appealing but also optimized for <span className="text-highlight">performance and usability</span>.
//       </p>

//       <p className="mt-4 text-subtext max-w-2xl">
//         Currently, I’m pursuing a <span className="text-highlight">Master’s in Computer Science</span> at 
//         <span className="text-highlight"> The George Washington University, SEAS</span>, where I am deepening my expertise in <span className="text-highlight">algorithms, advanced software paradigms, and web technologies</span>. 
//       </p>

//       <p className="mt-4 text-subtext max-w-2xl">
//         Previously, I worked as a <span className="text-highlight">Software Engineer at Scalex Technology Solutions LLP</span> for two years, where I developed and maintained web platforms, optimized user experiences, and contributed to building scalable applications. Some of my key contributions included:
//       </p>

//       <ul className="mt-2 text-subtext list-disc pl-5 max-w-2xl">
//         <li>Developed and enhanced web applications for a <span className="text-highlight">US-based Sneaker Insurance Company</span>, improving functionality and engagement.</li>
//         <li>Implemented <span className="text-highlight">responsive design principles</span>, increasing mobile user engagement by <span className="text-highlight">30%</span>.</li>
//         <li>Led <span className="text-highlight">code reviews</span>, reducing potential bugs by <span className="text-highlight">15%</span> before deployment.</li>
//         <li>Provided <span className="text-highlight">technical support</span>, reducing customer support tickets by <span className="text-highlight">25%</span> through proactive problem-solving.</li>
//       </ul>

//       <p className="mt-4 text-subtext max-w-2xl">
//         Beyond academics and professional experience, I enjoy exploring the creative side of technology. I’ve worked on <span className="text-highlight">computer vision projects</span>, 
//         <span className="text-highlight">machine learning applications</span>, and <span className="text-highlight">full-stack web development</span>, always looking for innovative ways to merge software with real-world impact.
//       </p>

//       <p className="mt-4 text-subtext max-w-2xl">
//         When I’m not coding, you’ll probably find me <span className="text-highlight">cosplaying</span>, <span className="text-highlight">sketching</span>, watching <span className="text-highlight">anime or K-dramas</span>, or enjoying a cup of 
//         <span className="text-highlight"> chai with chicken biryani</span>. I also love long walks around the <span className="text-highlight">National Monument</span> in DC, immersing myself in the city’s energy and inspiration.
//       </p>

//       <p className="mt-4 text-subtext max-w-2xl">
//         I’m currently looking for a <span className="text-highlight">Summer 2025 internship</span> and open to full-time roles after graduation in <span className="text-highlight">software engineering, frontend development, or AI-driven applications</span>. 
//         If you’d like to connect, feel free to reach out! 🚀
//       </p>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pl-[30%] pr-10">
      <motion.h1 {...fadeIn} className="text-primary text-5xl font-bold">
        Hi, I’m Aastha Rajput
      </motion.h1>
      <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="mt-4 text-subtext text-xl max-w-2xl">
        I’m a <span className="text-highlight">software engineer</span> and Master’s student at George Washington University, passionate about building impactful, user-friendly applications.
      </motion.p>
      <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.4 }} className="mt-4 text-subtext max-w-2xl">
        Currently seeking a <span className="text-highlight">Summer 2025 internship</span>. Let’s create something amazing together!
      </motion.p>

      <motion.a
        href="/path-to-your-resume.pdf"
        download
        className="mt-6 inline-block px-6 py-3 border border-primary text-primary rounded hover:bg-primary hover:text-background transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;
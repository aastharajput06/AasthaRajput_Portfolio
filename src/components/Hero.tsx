import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pl-[30%] pr-10">
      <motion.h1 {...fadeIn} className="text-primary text-5xl font-bold">
        Hi, I’m Aastha Rajput
      </motion.h1>
      <motion.p
        {...fadeIn}
        transition={{ ...fadeIn.transition, delay: 0.2 }}
        className="mt-4 text-subtext text-xl max-w-2xl"
      >
        I’m a <span className="text-highlight">Computer Science Master’s student</span> at The George Washington University (SEAS), graduating in December 2025. Passionate about software engineering, AI, and web development, I’m seeking <span className="text-highlight">Summer 2025 internships</span> and full-time roles to create impactful solutions.
      </motion.p>
      <motion.p
        {...fadeIn}
        transition={{ ...fadeIn.transition, delay: 0.4 }}
        className="mt-4 text-subtext max-w-2xl"
      >
        With experience in hackathons, full-stack projects, and scalable applications, I thrive at the intersection of <span className="text-highlight">code and creativity</span>. Check out my work on <a href="https://devpost.com/aastha-rajput" target="_blank" className="text-primary hover:text-highlight">Devpost</a>!
      </motion.p>
    </section>
  );
};

export default Hero;
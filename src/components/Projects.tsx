import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center pl-[30%] pr-10">
      <h2 className="text-2xl font-bold text-highlight">Some Things I’ve Built</h2>
      <div className="mt-8 grid grid-cols-1 gap-6">
        {[
          {
            title: "Anime Character Detection",
            desc: "Built a computer vision pipeline using Google Cloud Vision API to detect and count anime characters.",
          },
          {
            title: "AutoStereograms Generator",
            desc: "Developed a Python-based system to generate custom autostereograms from depth maps.",
          },
          {
            title: "Image Recognition Model",
            desc: "Devised a machine learning model with 92% accuracy for classifying images across 10 categories.",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="project-card p-6 bg-[var(--background)] border border-[var(--subtext)]/20 rounded-lg hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-light">{project.title}</h3>
            <p className="mt-2 text-subtext">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
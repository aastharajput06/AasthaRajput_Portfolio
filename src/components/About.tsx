const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pl-[30%] pr-10 py-10 bg-[var(--background)]">
      <h2 className="text-3xl font-bold text-highlight">About Me</h2>
      <p className="mt-6 text-subtext max-w-2xl">
        I’m a Master’s student in Computer Science at <span className="text-highlight">The George Washington University, School of Engineering and Applied Science</span>, set to graduate in December 2025. My academic journey focuses on <span className="text-highlight">software engineering, artificial intelligence, and web technologies</span>, complemented by hands-on experience from hackathons and real-world projects.
      </p>
      <p className="mt-4 text-subtext max-w-2xl">
        Previously, I worked as a <span className="text-highlight">Software Engineer at Scalex Technology Solutions LLP</span> for two years, where I built and optimized web platforms for a US-based Sneaker Insurance Company, boosting mobile engagement by 30% through responsive design. I’m an active participant in <span className="text-highlight">hackathons</span>—check my projects on <a href="https://devpost.com/aastha-rajput" target="_blank" className="text-primary hover:text-highlight">Devpost</a>—and love solving complex problems with code.
      </p>
      <p className="mt-4 text-subtext max-w-2xl">
        I’m seeking <span className="text-highlight">Summer 2025 internships</span> and full-time opportunities starting January 2026 in software engineering, frontend development, or AI-driven applications. When I’m not coding, I enjoy <span className="text-highlight">cosplaying, sketching, and exploring DC</span>, often with a chai in hand.
      </p>
    </section>
  );
};

export default About;
const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center pl-[30%]">
      <h2 className="text-2xl font-bold text-highlight">Where I’ve Worked</h2>
      <div className="mt-8">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-light">Software Engineer</h3>
          <p className="text-sm text-subtext">Scalex Technology Solutions LLP (Nov 2021 - Nov 2023)</p>
          <ul className="list-disc list-inside mt-2 text-subtext">
            <li>Developed and maintained web platform for a prestigious US-based Sneaker Insurance Company, improving user experience and functionality.</li>
            <li>Implemented responsive design principles, resulting in a 30% increase in mobile user engagement.</li>
            <li>Conducted code reviews, identifying and resolving 15% of potential bugs before deployment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
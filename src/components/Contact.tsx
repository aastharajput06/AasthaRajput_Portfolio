const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center pl-[30%] pr-10">
      <h2 className="text-2xl font-bold text-highlight">Get In Touch</h2>
      <p className="mt-4 text-subtext max-w-2xl">
        I’m always open to new opportunities and collaborations. Reach out at{" "}
        <a href="mailto:aastha.rajput@gwmail.gwu.edu" className="text-primary hover:text-highlight transition-colors">
          aastha.rajput@gwmail.gwu.edu
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;
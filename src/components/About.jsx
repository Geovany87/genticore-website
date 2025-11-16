import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="section__title">About Me</h2>
        <p className="section__subtitle">
          IT Support Technician • Front-End Developer • Continuous Learner
        </p>

        <div className="about__content">
          <p>
            I am an IT support specialist and front-end developer with a strong
            foundation in troubleshooting, system configuration, and user-focused
            technical support. Leveraging my CompTIA A+ knowledge and hands-on
            practical experience, I excel at diagnosing issues, optimizing
            performance, and ensuring reliable, secure systems for end-users.
          </p>

          <p>
            I combine my IT background with modern UI development skills to
            create clean, responsive, and accessible user interfaces. My work is
            grounded in best practices aligned with Penn LPS Full Stack
            Development standards—prioritizing maintainability, scalability, and
            clarity.
          </p>

          <p>
            I'm committed to continuous learning and growth, always improving my
            craft through new technologies, real-world projects, and
            problem-solving challenges.
          </p>

          <div className="about__highlights">
            <div className="highlight">
              <h4>💻 Technical Skills</h4>
              <ul>
                <li>Hardware diagnostics & repair</li>
                <li>OS installation & configuration</li>
                <li>Networking fundamentals</li>
                <li>Troubleshooting methodologies</li>
                <li>Front-end development (React, CSS)</li>
              </ul>
            </div>

            <div className="highlight">
              <h4>🎯 Professional Focus</h4>
              <ul>
                <li>Reliable IT assistance</li>
                <li>Clean and accessible UI design</li>
                <li>Customer-centered support</li>
                <li>Performance optimization</li>
                <li>Continuous learning & certification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

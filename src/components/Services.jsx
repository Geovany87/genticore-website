import "../styles/services.css";
import { FaLaptopCode, FaTools, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2 className="section__title">Services</h2>
      <p className="section__subtitle">
        IT Support • Troubleshooting • Front-End Development
      </p>

      <div className="services__grid">

        {/* IT Support */}
        <div className="service__card">
          <FaTools className="service__icon" />
          <h3>IT Support & Troubleshooting</h3>
          <p>
            Professional technical support grounded in CompTIA A+ principles,
            including diagnosing hardware issues, resolving system errors,
            improving performance, and delivering user-focused assistance.
          </p>
          <ul>
            <li>Hardware diagnostics & replacement</li>
            <li>OS installation & configuration</li>
            <li>System optimization</li>
            <li>Ticket-based troubleshooting workflow</li>
          </ul>
        </div>

        {/* Networking */}
        <div className="service__card">
          <FaNetworkWired className="service__icon" />
          <h3>Networking Fundamentals</h3>
          <p>
            Hands-on knowledge of networking essentials, including connectivity
            troubleshooting, router configuration, and secure network practices.
          </p>
          <ul>
            <li>TCP/IP fundamentals</li>
            <li>Router & switch basics</li>
            <li>Wi-Fi troubleshooting</li>
            <li>Network performance testing</li>
          </ul>
        </div>

        {/* Cybersecurity Essentials */}
        <div className="service__card">
          <FaShieldAlt className="service__icon" />
          <h3>Cybersecurity Essentials</h3>
          <p>
            Applying foundational security best practices to ensure safe,
            reliable, and protected systems for home and business users.
          </p>
          <ul>
            <li>Security hardening</li>
            <li>Malware detection basics</li>
            <li>Data backup procedures</li>
            <li>User security training</li>
          </ul>
        </div>

        {/* Front-End Development */}
        <div className="service__card">
          <FaLaptopCode className="service__icon" />
          <h3>Front-End Development</h3>
          <p>
            Building clean, responsive, and engaging web interfaces with a focus
            on usability, accessibility, and performance.
          </p>
          <ul>
            <li>React development</li>
            <li>Responsive UI design</li>
            <li>CSS architecture & styling</li>
            <li>Component-driven design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

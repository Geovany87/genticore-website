import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact_container">
        <h2 className="section_title">Contact Me</h2>
        <p className="section_subtitle">
          Interested in working together? Reach out and let’s build something amazing.
        </p>

        <div className="contact_grid">
          {/* Contact Info */}
          <div className="contact_info">
            <p><strong>Email:</strong> <a href="mailto:geovany@genticore.com">geovany@genticore.com</a></p>
            <p><strong>Location:</strong> Philadelphia, PA, USA</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Geovany87" target="_blank" rel="noopener noreferrer">github.com/Geovany87</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/geovanycardoza" target="_blank" rel="noopener noreferrer">linkedin.com/in/geovanycardoza</a></p>
          </div>

          {/* Contact Form */}
          <form className="contact_form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <p className="contact__intro">
          Interested in working together? Let’s connect!
        </p>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:geovany@genticore.com">geovany@genticore.com</a>
              </li>
              <li>
                <strong>Location:</strong> Philadelphia, PA, USA
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form
            className="contact__form"
            action="https://formspree.io/f/myyldgda"
            method="POST"
          >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="_replyto" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

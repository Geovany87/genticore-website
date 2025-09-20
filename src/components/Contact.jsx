import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          Interested in working together? Let’s connect.  
          You can use the form below or email me directly at{" "}
          <a href="mailto:geovany@genticore.com">geovany@genticore.com</a>.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take new projects, so feel free to get in
            touch with me
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <Mail />
              <p>nandkhedkargauri99@gmail.com</p>
            </div>
            <div className="contact-detail">
              <Phone />
              <p>+49 176 56129352</p>
            </div>
            <div className="contact-detail">
              <MapPin /> <p>Munich, Germany</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <label htmlFor=""> Your Name</label>
          <input type="text" placeholder="Please enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input
            type="text"
            placeholder="Please enter your email address"
            name="email"
          />
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Please enter your message here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

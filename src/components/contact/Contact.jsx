import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "06bef66e-9bc5-4e79-9571-97d12b5e7bb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
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
        <form onSubmit={onSubmit} className="contact-right">
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
        </form>
      </div>
    </div>
  );
};

export default Contact;

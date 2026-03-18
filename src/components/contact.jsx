import "../styles/contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [honeypot, setHoneypot] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (honeypot) {
      console.log("Bot detected 🚫");
      return;
    }
    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }
    setLoading(true); // 👈 ADD THIS

    emailjs
      .send(
        "service_9uko0ec",
        "template_l6zbppd",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "gB_PswLMU3LG7khpe",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false); // 👈 already correct

          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false); // 👈 ADD THIS (important!)
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Interested in collaborating? I'd love to hear about your project.
            Feel free to reach out!
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
            />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="form-textarea"
              rows="5"
            ></textarea>
          </div>
          <div className="form-group captcha-group">
            <div className="captcha-wrapper">
              <ReCAPTCHA
                sitekey="6Lf72I0sAAAAAFSJfHsoZULpXLWPHfg0GQxZH8MR"
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>
          </div>
          <button type="submit" disabled={loading} className="form-submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {isSubmitted && (
            <div className="form-success">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>

        <div className="contact-social">
          <p className="contact-social-label">
            Or connect with me on social media
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

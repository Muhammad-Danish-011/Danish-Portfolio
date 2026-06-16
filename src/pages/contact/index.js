import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { meta, contactConfig } from "../../content_option";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock,
  FaUser,
  FaPaperPlane,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaGlobe,
  FaComment
} from "react-icons/fa";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });
  
    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };
  
    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        "template_mrxulhl",
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            ...formData,
            loading: false,
            alertMessage: "✅ SUCCESS! Thank you for your message. I'll get back to you soon!",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormData({
            ...formData,
            alertMessage: `❌ Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
          document
            .getElementsByClassName("co_alert")[0]
            .scrollIntoView();
        }
      );
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Social Links with React Icons
  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/muhammad-danish-b40714224/", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/Muhammad-Danish-011", label: "GitHub" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=100004904865155", label: "Facebook" },
    { icon: <FaGlobe />, url: "https://danish-portfolio-q3tv.onrender.com", label: "Portfolio" },
  ];

  return (
    <HelmetProvider>
      <Container className="contact-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Header Section */}
        <Row className="mb-5 pt-3">
          <Col lg="8">
            <h1 className="contact-title">Contact Me</h1>
            <div className="title-underline"></div>
            <p className="contact-subtitle">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </Col>
        </Row>

        <Row className="contact-section">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`contact-alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormData({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertMessage}</p>
            </Alert>
          </Col>
          
          {/* Contact Info Column */}
          <Col lg="5" className="contact-info mb-5">
            <h3 className="info-heading">Get in Touch</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <span className="info-label">Email</span>
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="info-value">
                  {contactConfig.YOUR_EMAIL}
                </a>
              </div>
            </div>

            {contactConfig.hasOwnProperty("YOUR_FONE") && (
              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <a href={`tel:${contactConfig.YOUR_FONE}`} className="info-value">
                    {contactConfig.YOUR_FONE}
                  </a>
                </div>
              </div>
            )}

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-value">{contactConfig.description}</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <span className="info-label">Response Time</span>
                <span className="info-value">Within 24 hours</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <span className="social-label">Connect with me:</span>
              <div className="social-icons">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Contact Form Column */}
          <Col lg="7" className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FaUser className="label-icon" /> Your Name
                </label>
                <input
                  className="form-input"
                  id="name"
                  name="name"
                  placeholder="Please write your name"
                  value={formData.name || ""}
                  type="text"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FaEnvelope className="label-icon" /> Your Email
                </label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  placeholder="Please write your email"
                  type="email"
                  value={formData.email || ""}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FaComment className="label-icon" /> Your Message
                </label>
                <textarea
                  className="form-input form-textarea"
                  id="message"
                  name="message"
                  placeholder="Please write your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button className="btn-submit" type="submit" disabled={formData.loading}>
                {formData.loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </Col>
        </Row>
      </Container>

      <style>{`
        .contact-container {
          padding: 2rem 0;
        }

        .contact-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          border-radius: 2px;
          margin-bottom: 1rem;
        }

        .contact-subtitle {
          color: var(--text-color);
          opacity: 0.7;
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 600px;
        }

        .contact-section {
          padding: 1rem 0;
        }

        .contact-alert {
          background: var(--bg-color) !important;
          border: 1px solid var(--text-color) !important;
          border-color: rgba(255,255,255,0.06) !important;
          color: var(--text-color) !important;
          border-radius: 12px !important;
          padding: 1rem 1.25rem !important;
          margin-bottom: 2rem !important;
        }

        /* Contact Info */
        .contact-info {
          padding-right: 2rem;
        }

        .info-heading {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-color);
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin-bottom: 2rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }

        .info-item:hover {
          border-color: rgba(59, 130, 246, 0.3);
        }

        .info-icon {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #60a5fa;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .info-item:hover .info-icon {
          background: rgba(59, 130, 246, 0.2);
          transform: scale(1.05);
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-label {
          font-size: 0.75rem;
          color: var(--text-color);
          opacity: 0.4;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          color: var(--text-color);
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .info-value:hover {
          color: #60a5fa;
        }

        /* Social Links */
        .social-links {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
        }

        .social-label {
          display: block;
          font-size: 0.875rem;
          color: var(--text-color);
          opacity: 0.6;
          margin-bottom: 0.75rem;
        }

        .social-icons {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--bg-color);
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-color);
          font-size: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: #3b82f6;
          color: #60a5fa;
          transform: translateY(-3px);
        }

        /* Contact Form */
        .contact-form-wrapper {
          background: var(--bg-color);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          color: var(--text-color);
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .label-icon {
          color: #60a5fa;
          font-size: 0.9rem;
        }

        .form-input {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.08);
          background: var(--bg-color);
          color: var(--text-color);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-input::placeholder {
          color: var(--text-color);
          opacity: 0.3;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn-submit {
          padding: 0.85rem 2rem;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-info {
            padding-right: 0;
          }

          .contact-form-wrapper {
            padding: 1.25rem;
          }

          .info-item {
            padding: 0.75rem 0;
          }
        }

        @media (max-width: 576px) {
          .social-icons {
            flex-wrap: wrap;
          }

          .social-icon {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </HelmetProvider>
  );
};
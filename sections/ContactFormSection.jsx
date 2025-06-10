"use client";

import React, { useState, useRef } from "react";
import contactImg from "../assets/kimaya-creative.jpeg";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const formRef = useRef();

  const handleCaptchaChange = (token) => setCaptchaToken(token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setStatus("Please verify you're not a robot.");
      return;
    }

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwFUrsuEzkLUjc07z9MXmKwKSb1zGNo8gCJrmNLI0mCqkhopIjdHYqzvT2zcTKMpqL7Xg/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setStatus("Message sent successfully!");
        formRef.current.reset();
        setCaptchaToken(null);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Submission error. Please try again.");
    }
  };

  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container" style={{ maxWidth: "82rem" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <p className="fs-5 text-muted mb-2">
            Get in Touch
            <span
              className="d-block mx-auto mt-2"
              style={{
                width: "70px",
                height: "4px",
                backgroundColor: "#A8BE04",
                borderRadius: "2px",
              }}
            ></span>
          </p>
          <h2 className="text-dark fw-bold display-5">Contact Us</h2>
        </div>

        <div className="row g-5 align-items-center">
          {/* Image Column */}
          <div className="col-lg-6">
            <img
              src={contactImg.src}
              alt="Contact Visual"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          {/* Form Column */}
          <div className="col-lg-6">
            <div className="bg-light rounded-4 p-4 p-md-5 shadow-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="needs-validation">
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-medium text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-medium text-secondary">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="123-456-7890"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-medium text-secondary">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="form-control"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="mb-4">
                  <ReCAPTCHA
                    sitekey="6Lf-XVYrAAAAAMFeejFKY1OquTf-BrCgHV3l3w55"
                    onChange={handleCaptchaChange}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    backgroundColor: "#A8BE04",
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    boxShadow: "0 5px 15px rgba(168, 190, 4, 0.3)",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#94a503")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A8BE04")}
                >
                  Send Message
                </button>
              </form>

              {status && (
                <p className="text-center mt-3 text-muted fw-medium">{status}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

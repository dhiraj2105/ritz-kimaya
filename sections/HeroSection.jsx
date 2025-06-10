"use client";

import React, { useState } from "react";
import bannerImg from "../assets/Kimaya_Greens_Hero_Image.jpg";
import ReCAPTCHA from "react-google-recaptcha";

export default function HeroSection() {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify you're not a robot.");
      return;
    }

    const form = e.target;
    const data = {
      name: form[0].value,
      phone: form[1].value,
      email: form[2].value,
      message: form[3].value,
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
        alert("Thanks! We’ll get back to you soon.");
        form.reset();
        setCaptchaToken(null);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Failed to send. Please check your internet.");
      console.error("Form error:", error);
    }
  };

  return (
    <section
      id="home"
      className="position-relative min-vh-100 pt-5"
      style={{
        backgroundImage: `url(${bannerImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}
      ></div>

      <div
        className="container d-flex flex-column flex-md-row align-items-center justify-content-center text-white min-vh-100 py-5 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <h1 className="display-4 fw-bold mb-3">Luxury Apartments</h1>
          <h2 className="h3 fw-semibold mb-2">
            Sikka Kimaya Greens - Where Dehradun Lives Elevated
          </h2>
          <p className="lead mb-2">Near Doon IT Park</p>
          <p className="h5 fw-bold text-warning">Price Starts From ₹75 Lakh*</p>
        </div>

        <div className="col-md-5 bg-light bg-opacity-75 p-4 rounded shadow w-100" style={{ maxWidth: "400px", color: "#333" }}>
          <h3 className="h4 fw-bold text-center mb-4">Book Your Best Deal Now!</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                placeholder="Enter Your Mobile Number"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Enter your message or query here"
                className="form-control"
                rows={3}
              ></textarea>
            </div>

            <div className="mb-3">
              <ReCAPTCHA
                sitekey="6Lf-XVYrAAAAAMFeejFKY1OquTf-BrCgHV3l3w55"
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="btn w-100 text-white"
              style={{
                backgroundColor: "#A8BE04",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#94a503")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#A8BE04")}
            >
              Submit
            </button>
          </form>
          <p className="text-center mt-3 text-muted small">
            Please leave your details here. We will get back to you!
          </p>
        </div>
      </div>
    </section>
  );
}

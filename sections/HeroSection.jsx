"use client";

import React from "react";
import bannerImg from "../assets/Kimaya_Greens_Hero_Image.jpg";

export default function HeroSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      className="min-h-screen pt-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bannerImg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-6 md:px-20 py-10 text-white">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Luxury Apartments
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Sikka Kimaya Greens - Where Dehradun Lives Elevated
          </h2>
          <p className="text-lg mb-2">Near Doon IT Park</p>
          <p className="text-xl font-bold text-yellow-300">
            Price Starts From ₹72 Lakh*
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-2/5 backdrop-blur-xs bg-[#e2e2e2] p-6 rounded-lg shadow-lg text-gray-800 w-full max-w-md">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Book Your Best Deal Now!
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8BE04]"
              required
            />
            <input
              type="tel"
              placeholder="Enter Your Mobile Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8BE04]"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8BE04]"
              required
            />
            <textarea
              placeholder="Enter your message or query here"
              rows={3}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8BE04]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#A8BE04] text-white py-2 px-4 rounded-md cursor-pointer hover:bg-[#94a503] transition duration-300"
            >
              Submit
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-600">
            Please leave your details here. We will get back to you!
          </p>
        </div>
      </div>
    </section>
  );
}

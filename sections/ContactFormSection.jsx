"use client";

import React, { useState } from "react";
import contactImg from "../assets/kimaya-creative.jpeg";

export default function ContactForm() {
  const [status, setStatus] = useState(""); // To display success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      message: form[3].value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwFUrsuEzkLUjc07z9MXmKwKSb1zGNo8gCJrmNLI0mCqkhopIjdHYqzvT2zcTKMpqL7Xg/exec", // Google Apps Script URL
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus(`Error: ${result.message || "Something went wrong!"}`);
      }
    } catch (error) {
      setStatus("Failed to submit. Please try again.");
      console.error("Submit error:", error);
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-[82rem] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Get in Touch
            <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
          </p>
          <h2 className="text-black text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <img
              src={contactImg.src}
              alt="Contact Visual"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          <div className="lg:w-1/2 w-full text-black bg-gray-50 p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BE04]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BE04]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BE04]"
                  placeholder="123-456-7890"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BE04]"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#A8BE04] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300"
              >
                Send Message
              </button>
            </form>
            {/* {status && <p className="mt-4 text-center">{status}</p>}{" "} */}
            {/* Display status */}
          </div>
        </div>
      </div>
    </section>
  );
}

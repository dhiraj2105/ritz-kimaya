"use client";

import React from "react";

export default function ClosingStatementSection() {
  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          Closing Statement
          <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          A Lifestyle Beyond Expectations
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Sikka Kimaya Greens is more than just a residence—it’s a lifestyle
          choice where luxury, nature, and modernity converge. Whether you’re
          investing, upgrading, or looking for your serene second home, Kimaya
          Greens offers a ready, secure, and beautiful future. Join a community
          where every day feels like a retreat. Your elevated living experience
          awaits.
        </p>

        {/* CTA Button */}
        <button
          className="bg-[#A8BE04] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300"
          onClick={openPopup}
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
}

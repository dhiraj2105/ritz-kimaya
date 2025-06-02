"use client";

import React from "react";

export default function BuilderSection() {
  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          About the Builder
          <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
        </p>

        {/* Title */}
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-6">
          Sikka Group
        </h2>

        {/* Content */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          With decades of excellence, <strong>Sikka Group</strong> is a trusted
          name in Indian real estate, known for delivering premium homes marked
          by quality, design, and transparency. Each project reflects the
          Group’s commitment to innovation and sustainable living, ensuring your
          investment is both valuable and secure.{" "}
          <strong>Sikka Kimaya Greens</strong> is a testament to this legacy,
          promising luxury, safety, and community.
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

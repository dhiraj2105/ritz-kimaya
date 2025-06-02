"use client";

import React from "react";
import {
  FaHome,
  FaMapMarkerAlt,
  FaBuilding,
  FaRupeeSign,
  FaTree,
  FaShieldAlt,
} from "react-icons/fa";

const overviewData = [
  { icon: <FaHome size={72} />, title: "Luxury Living Spaces" },
  { icon: <FaMapMarkerAlt size={72} />, title: "Prime Dehradun Location" },
  { icon: <FaBuilding size={72} />, title: "Modern Architecture" },
  { icon: <FaRupeeSign size={72} />, title: "Affordable Pricing" },
  { icon: <FaTree size={72} />, title: "Green Landscapes" },
  { icon: <FaShieldAlt size={72} />, title: "24x7 Security" },
];

export default function OverviewSection() {
  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
  };
  return (
    <section className="py-20 bg-gray-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-3">
          Overview
          <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
        </p>

        {/* Title */}
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-10 inline-block relative">
          Sikka Kimaya
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {overviewData.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-lg rounded-xl p-8 min-h-[160px] hover:shadow-2xl transition"
            >
              <div className="text-[#597b88] mr-6 flex-shrink-0">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Download Brochure Button */}
        <button
          className="bg-[#A8BE04] text-white text-lg md:text-xl font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300"
          onClick={openPopup}
        >
          Download Brochure
        </button>
      </div>
    </section>
  );
}

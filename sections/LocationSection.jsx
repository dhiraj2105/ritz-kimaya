"use client";

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const locationPoints = [
  "Situated on Sahastradhara Road, a highly sought-after address in Dehradun.",
  "Offers easy access to key city destinations including educational institutions, healthcare facilities, shopping centers, and transport hubs.",
  "Surrounded by hills and lush greenery, offering a serene environment.",
  "Provides tranquility away from the hustle and bustle of city life.",
  "Perfectly blends modern convenience with the calm of nature.",
];

export default function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Location
            <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
          </p>
          <h2 className="text-black text-4xl md:text-5xl font-bold">
            Connected. Serene. Ideal.
          </h2>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4347.885716376338!2d78.08625457638706!3d30.366585174762854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7dcb8204ff5%3A0x6a8f7504f2587840!2sSikka%20Kimaya%20Greens!5e1!3m2!1sen!2sin!4v1748845961016!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Key Points */}
          <div className="w-full lg:w-1/2 space-y-6">
            {locationPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 text-left">
                <FaMapMarkerAlt className="text-[#A8BE04] text-xl shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

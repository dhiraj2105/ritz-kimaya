"use client";

import React from "react";
import Image from "next/image";

// Import images at the top
import gymImg from "../assets/gym.jpg";
import kidsPlayImg from "../assets/kids-play-area.webp";
import indoorGamesImg from "../assets/indoor-games.webp";
import outdoorGamesImg from "../assets/outdoor-games.webp";
import securityImg from "../assets/security.webp";
import swimmingPoolImg from "../assets/swimmimg-pool.webp"; // added extension
import joggingTrackImg from "../assets/jogging-track.webp";
import multiPurposeImg from "../assets/multi-purpose.webp";

const amenities = [
  {
    title: "Premium Architecture",
    description:
      "Designed by Broadway Malyan, focusing on natural light, ventilation, and sustainability.",
    image: gymImg,
  },
  {
    title: "Low Density Living",
    description:
      "Only 9 towers on 4.5 acres with 65% open green spaces, ensuring privacy and tranquility.",
    image: kidsPlayImg,
  },
  {
    title: "Ready to Move",
    description: "Possession available now — move in without delays.",
    image: indoorGamesImg,
  },
  {
    title: "Modern Amenities",
    description:
      "Clubhouse, swimming pool, gym, yoga center, children’s play area, jogging tracks, and terrace gardens.",
    image: outdoorGamesImg,
  },
  {
    title: "Safety & Infrastructure",
    description:
      "Earthquake-resistant structure, 24x7 CCTV security, biometric access, and fire safety systems.",
    image: securityImg,
  },
  {
    title: "Connectivity",
    description:
      "Minutes from Doon IT Park, Rajpur Road, schools, hospitals, and Jolly Grant Airport.",
    image: swimmingPoolImg,
  },
  {
    title: "Investment Potential",
    description:
      "High rental yield and capital appreciation in Dehradun’s fastest-growing zones.",
    image: joggingTrackImg,
  },
  {
    title: "Multi Purpose Hall",
    description:
      "Spacious hall ideal for gatherings, events, and community meetings.",
    image: multiPurposeImg,
  },
];

export default function AmenitiesSection() {
  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
  };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Subtitle & Title */}
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          Amenities
          <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
        </p>
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-10">
          Everything You Need. Thoughtfully Designed.
        </h2>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-semibold text-[#597b88] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {item.description}
                </p>

                {/* Button pinned at bottom */}
                <button
                  className="mt-auto bg-[#A8BE04] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#94a503] transition duration-300"
                  onClick={openPopup}
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="bg-[#A8BE04] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300"
          onClick={openPopup}
        >
          Explore All Features
        </button>
      </div>
    </section>
  );
}

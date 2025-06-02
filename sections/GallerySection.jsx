"use client";

import React from "react";
import Image from "next/image";

// Import images
import gymImg from "../assets/gym.jpg";
import kidsPlayImg from "../assets/kids-play-area.webp";
import indoorGamesImg from "../assets/indoor-games.webp";

const galleryItems = [
  {
    title: "Gym Area",
    image: gymImg,
  },
  {
    title: "Kids Play Zone",
    image: kidsPlayImg,
  },
  {
    title: "Indoor Games",
    image: indoorGamesImg,
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          Gallery
          <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
        </p>
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-10">
          A Glimpse Into Life Here
        </h2>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#597b88]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

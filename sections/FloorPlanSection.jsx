"use client";

import React from "react";
import Image from "next/image";

import bhk2 from "../assets/2BHK_Floor_Plan.jpg";
import bhk3 from "../assets/3bhk_Floor_Plan.jpg";
import bhk4 from "../assets/4bhk_Floor_plan.jpg";
import penthouse from "../assets/Penthouse_FloorPlan.jpg";

const floorPlans = [
  {
    title: "2 BHK",
    size: "1195 – 1820 sq. ft.",
    desc: "Perfect for nuclear families with spacious living areas.",
    image: bhk2,
  },
  {
    title: "3 BHK",
    size: "1390 – 2135 sq. ft.",
    desc: "For growing families requiring more room and comfort.",
    image: bhk3,
  },
  {
    title: "4 BHK",
    size: "2645 – 2775 sq. ft.",
    desc: "Premium villas for those who want expansive luxury and privacy.",
    image: bhk4,
  },
  {
    title: "PentHouse",
    size: "Available on request",
    desc: "With panoramic views and modern interiors",
    image: penthouse,
  },
];

export default function FloorPlanSection() {
  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
  };
  return (
    <section className="py-20 bg-white" id="floorPlan">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Subtitle & Title */}
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          Floor Plan
          <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
        </p>
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-10">
          Choose Your Ideal Home
        </h2>

        {/* Grid of Floor Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {floorPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover blur-[4px]"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-[#597b88] mb-1">
                  {plan.title}
                </h3>
                <p className="text-md text-gray-600 mb-2">{plan.size}</p>
                <p className="text-gray-500 text-[15px] mb-4">{plan.desc}</p>

                {/* Individual Button */}
                {/* <button
                  className="mt-2 bg-[#A8BE04] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#94a503] transition duration-300"
                  onClick={openPopup}
                >
                  View {plan.title}
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Note */}
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          All units offer balconies with breathtaking views and ample natural
          light.
        </p>

        {/* CTA Button */}
        <button
          className="bg-[#A8BE04] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300 "
          onClick={openPopup}
        >
          Schedule a Visit
        </button>
      </div>
    </section>
  );
}

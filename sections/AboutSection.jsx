"use client";

import React from "react";
import aboutImg from "../assets/about.jpg";

export default function AboutSection() {
  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
  };
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtitle + Title */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            About the Project
            <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
          </p>
          <h2 className="text-black text-4xl md:text-5xl font-bold">
            Near Doon IT Park
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Discover a harmonious blend of nature and modern living at{" "}
              <strong>Sikka Kimaya Greens</strong>, nestled in the serene
              surroundings of Sahastradhara Road, Dehradun. Designed by global
              architects <strong>Broadway Malyan</strong>, this ready-to-move
              residential haven offers spacious 1, 2, 3, and 4 BHK apartments
              with unmatched views of the Himalayan foothills. Experience life
              where fresh mountain air meets contemporary comforts.
            </p>

            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-6">
              <li>Ready-to-move residential property</li>
              <li>Spacious 1, 2, 3, and 4 BHK apartments</li>
              <li>Unmatched views of the Himalayan foothills</li>
              <li>Flexible Payment Plan</li>
              <li>Located on Sahastradhara Road, Dehradun</li>
              <li>Fresh mountain air with contemporary comforts</li>
            </ul>

            {/* Button */}
            <button
              className="bg-[#A8BE04] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300"
              onClick={openPopup}
            >
              Know More
            </button>
          </div>

          {/* Right Image */}
          {/* <div className="lg:w-1/2 w-full">
            <img
              src={aboutImg.src}
              alt="About Sikka Kimaya"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div> */}
          <div className="lg:w-1/2 w-full">
            <img
              src={aboutImg.src}
              alt="About Sikka Kimaya"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

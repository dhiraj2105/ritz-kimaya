// "use client";

// import React from "react";
// import Image from "next/image";

// // Import images at the top
// import gymImg from "../assets/gym.jpg";
// import kidsPlayImg from "../assets/kids-play-area.webp";
// import indoorGamesImg from "../assets/indoor-games.webp";
// import outdoorGamesImg from "../assets/outdoor-games.webp";
// import securityImg from "../assets/security.webp";
// import swimmingPoolImg from "../assets/swimmimg-pool.webp"; // added extension
// import joggingTrackImg from "../assets/jogging-track.webp";
// import multiPurposeImg from "../assets/multi-purpose.webp";

// const amenities = [
//   {
//     title: "Infinity Swimming Pool",
//     description:
//       "Unwind with breathtaking views in our luxurious rooftop infinity pool.",
//     image: swimmingPoolImg,
//   },
//   {
//     title: "Clubhouse",
//     description:
//       "A vibrant social hub with lounge, café, library, and indoor games for community bonding.",
//     image: outdoorGamesImg,
//   },
//   {
//     title: "Gym",
//     description:
//       "Fully-equipped modern fitness center designed to support your active lifestyle.",
//     image: gymImg,
//   },
//   {
//     title: "Mini Theatre",
//     description:
//       "Enjoy movie nights and private screenings with family in a cozy mini theatre.",
//     image: indoorGamesImg,
//   },
//   {
//     title: "Meditation Garden",
//     description:
//       "Find inner peace in our serene meditation garden surrounded by nature.",
//     image: multiPurposeImg,
//   },
//   {
//     title: "Jogging Track",
//     description:
//       "Stay fit with our dedicated jogging path set amidst lush green landscapes.",
//     image: joggingTrackImg,
//   },
//   {
//     title: "Kids Play Zone",
//     description:
//       "Safe and colorful play area where children can explore, play, and grow.",
//     image: kidsPlayImg,
//   },
//   {
//     title: "Central Lawn",
//     description:
//       "Expansive central green for outdoor gatherings, leisure, and community events.",
//     image: securityImg,
//   },
//   {
//     title: "Banquet Hall",
//     description:
//       "Elegant venue for family functions, celebrations, and special occasions.",
//     image: multiPurposeImg,
//   },
//   {
//     title: "Cabanas",
//     description:
//       "Private cabanas by the poolside offer a perfect space to relax and socialize.",
//     image: swimmingPoolImg,
//   },
//   {
//     title: "Board Games Area",
//     description:
//       "Fun and engaging space for indoor board games, perfect for all age groups.",
//     image: indoorGamesImg,
//   },
// ];

// export default function AmenitiesSection() {
//   const openPopup = () => {
//     window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
//   };
//   return (
//     <section className="py-20 bg-white" id="amenities">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Subtitle & Title */}
//         <p className="text-xl md:text-2xl text-gray-600 mb-2">
//           Amenities
//           <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
//         </p>
//         <h2 className="text-black text-4xl md:text-5xl font-bold mb-10">
//           Everything You Need. Thoughtfully Designed.
//         </h2>

//         {/* Grid of Amenities */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {amenities.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
//             >
//               <div className="w-full h-64 relative">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="p-6 flex flex-col flex-grow text-left">
//                 <h3 className="text-2xl font-semibold text-[#597b88] mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-700 text-base mb-4 flex-grow">
//                   {item.description}
//                 </p>

//                 {/* Button pinned at bottom */}
//                 <button
//                   className="mt-auto bg-[#A8BE04] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#94a503] transition duration-300"
//                   onClick={openPopup}
//                 >
//                   Explore
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <button
//           className="bg-[#A8BE04] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300"
//           onClick={openPopup}
//         >
//           Explore All Features
//         </button>
//       </div>
//     </section>
//   );
// }

//      v2
"use client";

import React from "react";
import Image from "next/image";

// Image imports
import gymImg from "../assets/gym.jpg";
import kidsPlayImg from "../assets/kids-play-area.webp";
import indoorGamesImg from "../assets/indoor-games.webp";
import outdoorGamesImg from "../assets/outdoor-games.webp";
import securityImg from "../assets/security.webp";
import swimmingPoolImg from "../assets/swimmimg-pool.webp";
import joggingTrackImg from "../assets/jogging-track.webp";
import multiPurposeImg from "../assets/multi-purpose.webp";

// Amenities data
const amenities = [
  {
    title: "Infinity Swimming Pool",
    description:
      "Unwind with breathtaking views in our luxurious rooftop infinity pool.",
    image: swimmingPoolImg,
  },
  {
    title: "Clubhouse",
    description:
      "A vibrant social hub with lounge, café, library, and indoor games for community bonding.",
    image: outdoorGamesImg,
  },
  {
    title: "Gym",
    description:
      "Fully-equipped modern fitness center designed to support your active lifestyle.",
    image: gymImg,
  },
  {
    title: "Mini Theatre",
    description:
      "Enjoy movie nights and private screenings with family in a cozy mini theatre.",
    image: indoorGamesImg,
  },
  {
    title: "Meditation Garden",
    description:
      "Find inner peace in our serene meditation garden surrounded by nature.",
    image: multiPurposeImg,
  },
  {
    title: "Jogging Track",
    description:
      "Stay fit with our dedicated jogging path set amidst lush green landscapes.",
    image: joggingTrackImg,
  },
  {
    title: "Kids Play Zone",
    description:
      "Safe and colorful play area where children can explore, play, and grow.",
    image: kidsPlayImg,
  },
  {
    title: "Central Lawn",
    description:
      "Expansive central green for outdoor gatherings, leisure, and community events.",
    image: securityImg,
  },
  {
    title: "Banquet Hall",
    description:
      "Elegant venue for family functions, celebrations, and special occasions.",
    image: multiPurposeImg,
  },
  {
    title: "Cabanas",
    description:
      "Private cabanas by the poolside offer a perfect space to relax and socialize.",
    image: swimmingPoolImg,
  },
  {
    title: "Board Games Area",
    description:
      "Fun and engaging space for indoor board games, perfect for all age groups.",
    image: indoorGamesImg,
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-white" id="amenities">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          Amenities
          <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
        </p>
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-10">
          Everything You Need. Thoughtfully Designed.
        </h2>

        {/* Amenity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {amenities.slice(0, amenities.length - 3).map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col text-left"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#597b88] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last 3 Centered in Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {amenities.slice(-3).map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col text-left"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#597b88] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="bg-[#A8BE04] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300"
          onClick={() => window.dispatchEvent(new Event("openPopup"))}
        >
          Explore All Features
        </button>
      </div>
    </section>
  );
}

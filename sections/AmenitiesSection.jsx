// "use client";

// import React from "react";
// import Image from "next/image";

// // Image imports
// import gymImg from "../assets/AMTY/GYM.png";
// import Banquet_Hall from "../assets/AMTY/Banquet_Hall.png";
// import Board_Games_Area from "../assets/AMTY/Board_Games_Area.jpg";
// import Cabanas from "../assets/AMTY/Cabanas.png";
// import Central_Lawn from "../assets/AMTY/Central_Lawn.png";
// import Infinity_Pool_icon from "../assets/AMTY/Infinity_Pool_icon.png";
// import Jogging_Track from "../assets/AMTY/Jogging_Track.png";
// import Kids_Play_Zone from "../assets/AMTY/Kids_Play_Zone.png";
// import Low_Density_Living from "../assets/AMTY/Low_Density_Living.png";
// import Meditation_Garden from "../assets/AMTY/Meditation_Garden.png";
// import Mini_Theatre from "../assets/AMTY/Mini_Theatre.png";

// // Amenities data
// const amenities = [
//   {
//     title: "Infinity Swimming Pool",
//     description:
//       "Unwind with breathtaking views in our luxurious rooftop infinity pool.",
//     image: Infinity_Pool_icon,
//   },
//   {
//     title: "Clubhouse",
//     description:
//       "A vibrant social hub with lounge, café, library, and indoor games for community bonding.",
//     image: Low_Density_Living,
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
//     image: Mini_Theatre,
//   },
//   {
//     title: "Meditation Garden",
//     description:
//       "Find inner peace in our serene meditation garden surrounded by nature.",
//     image: Meditation_Garden,
//   },
//   {
//     title: "Jogging Track",
//     description:
//       "Stay fit with our dedicated jogging path set amidst lush green landscapes.",
//     image: Jogging_Track,
//   },
//   {
//     title: "Kids Play Zone",
//     description:
//       "Safe and colorful play area where children can explore, play, and grow.",
//     image: Kids_Play_Zone,
//   },
//   {
//     title: "Central Lawn",
//     description:
//       "Expansive central green for outdoor gatherings, leisure, and community events.",
//     image: Central_Lawn,
//   },
//   {
//     title: "Banquet Hall",
//     description:
//       "Elegant venue for family functions, celebrations, and special occasions.",
//     image: Banquet_Hall,
//   },
//   {
//     title: "Cabanas",
//     description:
//       "Private cabanas by the poolside offer a perfect space to relax and socialize.",
//     image: Cabanas,
//   },
//   {
//     title: "Board Games Area",
//     description:
//       "Fun and engaging space for indoor board games, perfect for all age groups.",
//     image: Board_Games_Area,
//   },
// ];

// export default function AmenitiesSection() {
//   return (
//     <section className="py-20 bg-white" id="amenities">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Header */}
//         <p className="text-xl md:text-2xl text-gray-600 mb-2">
//           Amenities
//           <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
//         </p>
//         <h2 className="text-black text-4xl md:text-5xl font-bold mb-10">
//           Everything You Need. Thoughtfully Designed.
//         </h2>

//         {/* Amenity Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {amenities.slice(0, amenities.length - 3).map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col text-left"
//             >
//               <div className="w-full h-64 relative">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold text-[#597b88] mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-700 text-sm">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Last 3 Centered in Row */}
//         <div className="flex flex-wrap justify-center gap-8 mb-10">
//           {amenities.slice(-3).map((item, index) => (
//             <div
//               key={index}
//               className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col text-left"
//             >
//               <div className="w-full h-64 relative">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold text-[#597b88] mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-700 text-sm">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <button
//           className="bg-[#A8BE04] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-[#94a503] transition duration-300"
//           onClick={() => window.dispatchEvent(new Event("openPopup"))}
//         >
//           Explore All Features
//         </button>
//       </div>
//     </section>
//   );
// }

// v2
"use client";

import React from "react";
import Image from "next/image";

// Image imports
import gymImg from "../assets/AMTY/GYM.png";
import Banquet_Hall from "../assets/AMTY/Banquet_Hall.png";
import Board_Games_Area from "../assets/AMTY/Board_Games_Area.jpg";
import Cabanas from "../assets/AMTY/Cabanas.png";
import Central_Lawn from "../assets/AMTY/Central_Lawn.png";
import Infinity_Pool_icon from "../assets/AMTY/Infinity_Pool_icon.png";
import Jogging_Track from "../assets/AMTY/Jogging_Track.png";
import Kids_Play_Zone from "../assets/AMTY/Kids_Play_Zone.png";
import Low_Density_Living from "../assets/AMTY/Low_Density_Living.png";
import Meditation_Garden from "../assets/AMTY/Meditation_Garden.png";
import Mini_Theatre from "../assets/AMTY/Mini_Theatre.png";

// Amenities data
const amenities = [
  {
    title: "Infinity Swimming Pool",
    description:
      "Unwind with breathtaking views in our luxurious rooftop infinity pool.",
    image: Infinity_Pool_icon,
  },
  {
    title: "Clubhouse",
    description:
      "A vibrant social hub with lounge, café, library, and indoor games for community bonding.",
    image: Low_Density_Living,
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
    image: Mini_Theatre,
  },
  {
    title: "Meditation Garden",
    description:
      "Find inner peace in our serene meditation garden surrounded by nature.",
    image: Meditation_Garden,
  },
  {
    title: "Jogging Track",
    description:
      "Stay fit with our dedicated jogging path set amidst lush green landscapes.",
    image: Jogging_Track,
  },
  {
    title: "Kids Play Zone",
    description:
      "Safe and colorful play area where children can explore, play, and grow.",
    image: Kids_Play_Zone,
  },
  {
    title: "Central Lawn",
    description:
      "Expansive central green for outdoor gatherings, leisure, and community events.",
    image: Central_Lawn,
  },
  {
    title: "Banquet Hall",
    description:
      "Elegant venue for family functions, celebrations, and special occasions.",
    image: Banquet_Hall,
  },
  {
    title: "Cabanas",
    description:
      "Private cabanas by the poolside offer a perfect space to relax and socialize.",
    image: Cabanas,
  },
  {
    title: "Board Games Area",
    description:
      "Fun and engaging space for indoor board games, perfect for all age groups.",
    image: Board_Games_Area,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {amenities.slice(0, -3).map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl ring-1 ring-transparent hover:ring-[#A8BE04] transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center p-6"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="mb-4 object-contain transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-[#597b88] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Last 3 Centered in Row */}
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {amenities.slice(-3).map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] bg-gray-50 rounded-xl shadow-md hover:shadow-xl ring-1 ring-transparent hover:ring-[#A8BE04] transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center p-6"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="mb-4 object-contain transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-[#597b88] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
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

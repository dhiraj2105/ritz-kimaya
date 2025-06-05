// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// // Import images
// import gymImg from "../assets/gym.jpg";
// import kidsPlayImg from "../assets/kids-play-area.webp";
// import indoorGamesImg from "../assets/indoor-games.webp";

// const galleryItems = [
//   { title: "Gym Area", image: gymImg },
//   { title: "Kids Play Zone", image: kidsPlayImg },
//   { title: "Indoor Games", image: indoorGamesImg },
// ];

// export default function GallerySection() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <section className="py-20 bg-white relative z-10">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Header */}
//         <p className="text-xl md:text-2xl text-gray-600 mb-2">
//           Gallery
//           <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
//         </p>
//         <h2 className="text-black text-4xl md:text-5xl font-bold mb-10">
//           A Glimpse Into Life Here
//         </h2>

//         {/* Gallery Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {galleryItems.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedImage(item)}
//               className="cursor-pointer bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//             >
//               <div className="w-full h-64 relative">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-[#597b88]">
//                   {item.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fullscreen Image Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
//           onClick={() => setSelectedImage(null)} // click outside to close
//         >
//           <div
//             className="relative max-w-4xl w-full"
//             onClick={(e) => e.stopPropagation()} // prevent modal click from closing
//           >
//             <button
//               className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
//               onClick={() => setSelectedImage(null)}
//             >
//               <svg
//                 className="w-6 h-6 text-gray-800"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <Image
//               src={selectedImage.image}
//               alt={selectedImage.title}
//               width={1200}
//               height={800}
//               className="w-full h-auto object-contain rounded-lg shadow-lg"
//             />
//             <p className="text-white text-center mt-4 text-lg">
//               {selectedImage.title}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

//      v2

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image imports
import img1 from "../assets/Gallery/1.jpg";
import img2 from "../assets/Gallery/2.jpg";
import img3 from "../assets/Gallery/3.jpg";
import img4 from "../assets/Gallery/4.jpg";
import img5 from "../assets/Gallery/5.jpg";
import img6 from "../assets/Gallery/6.jpg";
import img7 from "../assets/Gallery/7.jpg";
import img8 from "../assets/Gallery/8.jpg";
import img9 from "../assets/Gallery/9.jpg";

const galleryItems = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          Gallery
          <span className="block w-20 h-1 bg-[#A8BE04] mt-1 mx-auto"></span>
        </p>
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-10">
          A Glimpse Into Life Here
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-xl shadow-lg"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
                <Image
                  src={item.image}
                  alt="gallery image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

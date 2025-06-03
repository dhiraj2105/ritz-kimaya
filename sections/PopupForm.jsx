"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../assets/banner-new.webp";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);

    const handleOpenPopup = () => setIsOpen(true);
    window.addEventListener("openPopup", handleOpenPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("openPopup", handleOpenPopup);
    };
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="bg-white w-full max-w-4xl rounded-3xl shadow-xl relative flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close popup"
                className="absolute top-3 right-4 text-black font-extrabold text-4xl p-2 hover:text-gray-800 z-10"
              >
                ×
              </button>

              {/* Left Image */}
              <div className="hidden md:block md:w-1/2 max-h-64 md:max-h-full overflow-hidden">
                <Image
                  src={logo}
                  alt="Sikka Kimaya"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Form */}
              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Book a Visit
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
                    required
                  />
                  <textarea
                    placeholder="Write Your Message Here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
                    rows={3}
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#A8BE04] py-2 rounded-xl text-white font-bold hover:bg-[#94a503] transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

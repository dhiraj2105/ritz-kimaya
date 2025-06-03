"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TopArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        data-aos="fade-up"
        className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-white hover:text-gray-900 transition-colors duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
}

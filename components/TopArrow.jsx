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
        aria-label="Back to top"
        type="button"
        className="btn btn-dark position-fixed bottom-0 end-0 m-3 rounded-circle shadow"
        style={{ width: "48px", height: "48px", zIndex: 1050, transition: "color 0.3s, background-color 0.3s" }}
        onMouseEnter={(e) => {
          e.currentTarget.classList.remove("btn-dark");
          e.currentTarget.classList.add("btn-light", "text-dark");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.add("btn-dark");
          e.currentTarget.classList.remove("btn-light", "text-dark");
        }}
      >
        <FaArrowUp className="fs-4" />
      </button>
    )
  );
}

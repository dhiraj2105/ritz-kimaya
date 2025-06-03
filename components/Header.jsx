"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.png";
import kimayaLogo from "../assets/Website_Logo_Kimaya.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
  };

  return (
    <header className="w-full rounded-xl  bg-white shadow-md fixed top-1 p-1 left-0 z-50 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on far left */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={40}
                className="object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </Link>

            <div className="w-px h-8 bg-gray-300" />

            <Link href="/">
              <Image
                src={kimayaLogo}
                alt="Second Logo"
                width={130}
                height={50}
                className="object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6 text-gray-700 font-medium">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#floorPlan", label: "Floor Plans" },
              { href: "#amenities", label: "Amenities" },
              { href: "#location", label: "Location" },
            ].map(({ href, label }) => (
              <div key={href} className="relative group">
                <Link
                  href={href}
                  className="hover:text-primary transition-colors"
                >
                  {label}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#A8BE04] transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </nav>

          {/* CTA Button on far right */}
          <div className="hidden lg:flex">
            <Link href="#schedule">
              <button
                className="text-white px-5 py-2 rounded-full  bg-[#A8BE04] hover:text-white cursor-pointer hover:shadow-md transition-all"
                onClick={openPopup}
              >
                Schedule a Visit
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 text-center text-gray-700 font-medium">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Projects
            </Link>
            <Link
              href="#amenities"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Amenities
            </Link>
            <Link
              href="#location"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Location
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Contact
            </Link>
            <Link
              href="#schedule"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-2"
            >
              <button className="bg-primary text-black px-4 py-2 rounded-full hover:bg-opacity-90 hover:shadow-md transition-all">
                Schedule a Visit
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

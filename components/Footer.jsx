"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo + Description */}
        <div className="max-w-xs">
          <Link href="/" className="inline-block mb-4">
            <Image src={logo} alt="Sikka Logo" width={140} height={140} />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Experience luxurious living at Sikka Kimaya Greens with world-class
            amenities and premium design in the heart of Dehradun.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-auto">
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Floor Plans", href: "#floorPlan" },
              { label: "Amenities", href: "#amenities" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-800"></div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        <p>
          &copy; {new Date().getFullYear()} Sikka. All rights reserved. | Built
          with ❤️ in Dehradun.
        </p>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo + Description */}
        <div className="md:w-1/3 w-full">
          <Link href="/" className="inline-block mb-4">
            <Image src={logo} alt="Sikka Logo" width={140} height={140} />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Experience luxurious living at Sikka Kimaya Greens with world-class
            amenities and premium design in the heart of Dehradun.
          </p>
        </div>

        {/* Quick Links aligned right on large screens */}
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-end text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col space-y-2 text-sm">
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
      <div className="container mx-auto px-4 mt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4 text-center sm:text-left">
        <p>
          &copy; {new Date().getFullYear()} Sikka. All rights reserved. | Built
          with ❤️ in Dehradun.
        </p>
        <p className="text-gray-400">RERA No: UKREP09170000018</p>
      </div>
    </footer>
  );
}

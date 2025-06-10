"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-light pt-5 pb-4">
      {/* Top Section */}
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start gap-4">
        {/* Logo + Description */}
        <div className="w-100 w-md-50">
          <Link href="/" passHref>
            <div className="d-inline-block mb-3">
              <Image src={logo} alt="Sikka Logo" width={140} height={140} />
            </div>
          </Link>
          <p className="text-white small lh-base pe-md-5">
            Experience luxurious living at Sikka Kimaya Greens with world-class
            amenities and premium design in the heart of Dehradun.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-100 w-md-25 text-center text-md-end">
          <h4 className="h6 fw-semibold text-white mb-3">Quick Links</h4>
          <ul className="list-unstyled  small mb-0">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Floor Plans", href: "#floorPlan" },
              { label: "Amenities", href: "#amenities" },
            ].map(({ label, href }) => (
              <li key={label} className="mb-2">
                <Link href={href} passHref>
                  <span className="text-white text-decoration-none hover-text-white">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-secondary mt-4" />

      {/* Bottom Section */}
      <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center text-center text-sm-start small text-white gap-2 mt-2">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Sikka. All rights reserved. | Built
          with ❤️ in Dehradun.
        </p>
        <p className="mb-0">RERA No: UKREP09170000018</p>
      </div>
    </footer>
  );
}

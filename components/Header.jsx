"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.png";
import kimayaLogo from "../assets/Website_Logo_Kimaya.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup"));
  };

  return (
    <header className="bg-white shadow-sm fixed-top py-2 px-3 z-3">
      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">
        {/* Left: Logos */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <Link href="/" className="me-2">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={40}
              className="img-fluid"
            />
          </Link>

          <div className="vr mx-2" />

          <Link href="/">
            <Image
              src={kimayaLogo}
              alt="Second Logo"
              width={130}
              height={50}
              className="img-fluid"
            />
          </Link>
        </div>

        {/* Toggle for mobile */}
        <button
          className="btn btn-outline-secondary d-md-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
        </button>

        {/* Desktop Nav */}
        <nav className="d-none d-md-flex flex-grow-1 justify-content-center gap-3 text-dark fw-medium">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#floorPlan", label: "Floor Plans" },
            { href: "#amenities", label: "Amenities" },
            { href: "#location", label: "Location" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link position-relative text-dark"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop Only */}
        <div className="d-none d-lg-block">
          <Link href="/">
            <button
              className="btn btn-success rounded-pill px-4"
              style={{ backgroundColor: "#A8BE04", borderColor: "#A8BE04" }}
              onClick={openPopup}
            >
              Schedule a Visit
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="w-100 d-md-none mt-3">
            <div className="d-flex flex-column text-center gap-2 fw-medium">
              <Link href="#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link href="#amenities" onClick={() => setIsOpen(false)}>
                Amenities
              </Link>
              <Link href="#location" onClick={() => setIsOpen(false)}>
                Location
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link href="/" onClick={() => setIsOpen(false)}>
                <button
                  className="btn rounded-pill mt-2"
                  style={{
                    backgroundColor: "#A8BE04",
                    color: "white",
                  }}
                >
                  Schedule a Visit
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

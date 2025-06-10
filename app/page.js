import TopArrow from "@/components/TopArrow";
import AboutSection from "@/sections/AboutSection";
import AmenitiesSection from "@/sections/AmenitiesSection";
import BuilderSection from "@/sections/BuilderSection";
import ClosingStatementSection from "@/sections/ClosingStatementSection";
import ContactFormSection from "@/sections/ContactFormSection";
import FloorPlanSection from "@/sections/FloorPlanSection";
import GallerySection from "@/sections/GallerySection";
import HeroSection from "@/sections/HeroSection";
import LocationSection from "@/sections/LocationSection";
import OverviewSection from "@/sections/OverviewSection";
import PopupForm from "@/sections/PopupForm";
import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <div>
      <PopupForm />
      <HeroSection />
      <OverviewSection />
      <AboutSection />
      <BuilderSection />
      <FloorPlanSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <ClosingStatementSection />
      <TopArrow />
      <ContactFormSection />
    </div>
  );
};

export default Home;

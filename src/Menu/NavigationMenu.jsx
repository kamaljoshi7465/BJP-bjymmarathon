import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import AboutButton from "../Buttons/AboutButton";
import Home from "../Buttons/Home";
import MediaCoverageButton from "../Buttons/MediaCoverageButton";
import EventHighlightsButton from "../Buttons/EventHighlights";
import GalleryButton from "../Buttons/GalleryButton";
import CertificateButton from "../Buttons/CertificateButton";

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="mt-4">
      {/* Mobile Menu Toggle */}
      <div className="flex justify-between items-center md:hidden">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={toggleMenu} className="text-2xl text-[#fb5d16]">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Home />
          <AboutButton />
          <MediaCoverageButton />
          <EventHighlightsButton />
          <GalleryButton />
          <CertificateButton />
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-4">
        <Home />
        <AboutButton />
        <MediaCoverageButton />
        <EventHighlightsButton />
        <GalleryButton />
        <CertificateButton />
      </div>
    </div>
  );
}

export default NavigationMenu;

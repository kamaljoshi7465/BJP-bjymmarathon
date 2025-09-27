import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import TabButton from "../Buttons/TabButton";

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const cities = [
    "gorakhpur",
    "lucknow",
    "varanasi",
    "ghaziabad",
    "agra",
    "bareilly",
    "moradabad",
    "meerut",
    "aligarh",
    "prayagraj",
    "ayodhya",
    "jhansi",
    "mathura",
    "firozabad",
    "saharanpur",
    "shahjahanpur",
  ];

  const renderTabs = () => (
    <>
      {/* <Home /> */}
      {cities.map((city) => (
        <TabButton key={city} city={city} />
      ))}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      {/* Mobile Menu Toggle */}
      <div className="flex justify-between items-center md:hidden p-2 border-b">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={toggleMenu} className="text-2xl text-[#fb5d16]">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-2 max-h-[30vh] overflow-y-auto flex flex-col gap-2">
          {renderTabs()}
        </div>
      )}

      {/* Desktop Menu (Sticky + Horizontal Scroll) */}
      <div className="hidden md:flex overflow-x-auto scrollbar-hide px-4 py-2 gap-3">
        {renderTabs()}
      </div>
    </div>
  );
}

export default NavigationMenu;

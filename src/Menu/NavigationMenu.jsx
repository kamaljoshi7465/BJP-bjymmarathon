import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Home from "../Buttons/Home";
import MeerutMarathonButton from "../Buttons/MeerutMarathonButton";
import GorakhpurMarathonButton from "../Buttons/GorakhpurMarathonButton copy";

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
        <div className="flex flex-col gap-4 mt-4 md:hidden justify-center">
          <Home />
          <GorakhpurMarathonButton />
          <MeerutMarathonButton />
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-4 justify-center">
        <Home />
        <GorakhpurMarathonButton />
        <MeerutMarathonButton />
      </div>
    </div>
  );
}

export default NavigationMenu;

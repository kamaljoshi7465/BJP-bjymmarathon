import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function TabButton({ city }) {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const activeCity = params.get("city");

  const isActive = activeCity === city;

  return (
    <button
      onClick={() => navigate(`/media/gallery?city=${city}`)}
      className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition duration-300 ease-out shadow-md
        ${
          isActive
            ? "bg-[#d1450d] text-white"
            : "bg-[#fb5d16] text-white hover:scale-105 hover:shadow-lg"
        }`}
    >
      <FaInfoCircle
        className={`text-base transition-transform duration-300 ${
          isActive ? "rotate-12" : "group-hover:rotate-12"
        }`}
      />
      <span className="whitespace-nowrap capitalize">{city}</span>
    </button>
  );
}

export default TabButton;

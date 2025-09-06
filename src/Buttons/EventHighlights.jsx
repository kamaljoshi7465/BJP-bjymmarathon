import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function EventHighlightsButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/highlights";

  return (
    <button
      onClick={() => navigate("/highlights")}
      className={`group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-xl shadow-lg transition duration-300 ease-out ${
        isActive
          ? "bg-[#d1450d] text-white" // Active state
          : "bg-[#fb5d16] text-white hover:scale-105 hover:shadow-xl"
      }`}
    >
      <HiOutlineLightBulb className="mr-2 text-lg transition-transform duration-300 group-hover:rotate-12" />
      Event Highlights
      <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
    </button>
  );
}

export default EventHighlightsButton;

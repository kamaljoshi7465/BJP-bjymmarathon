import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaBookOpen } from "react-icons/fa";

function IntroductionButton() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out bg-[#fb5d16] rounded-xl shadow-lg hover:scale-105 hover:shadow-xl"
        onClick={() => navigate("/introduction")}
      >
        <FaBookOpen className="mr-2 text-lg transition-transform duration-300 group-hover:rotate-12" />
        Introduction
        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </button>
    </>
  );
}

export default IntroductionButton;

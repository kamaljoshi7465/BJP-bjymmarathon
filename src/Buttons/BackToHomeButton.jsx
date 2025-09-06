import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHomeButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="text-[#fb5d16] hover:text-orange-700 flex items-center"
    >
      <ArrowLeft className="w-5 h-5 mr-1" />
      <span className="hidden md:inline">Back To Home</span>
    </button>
  );
};

export default BackToHomeButton;

import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="text-[#fb5d16] hover:text-orange-700 flex"
    >
      <ArrowLeft className="w-5 h-5 mr-1" />
      <span className="hidden md:inline">Back</span>
    </button>
  );
};

export default BackButton;

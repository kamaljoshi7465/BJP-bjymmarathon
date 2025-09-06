import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterButton() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate("/register")}
        className="bg-[#fb5d16] hover:bg-orange-700 text-white px-8 py-6 rounded-full transition-all shadow-md text-center"
      >
        <span className="block text-lg font-semibold leading-tight">
          Register for Mock Parliament 2025
        </span>
        <span className="block text-3xl font-medium">
          Register Now
        </span>
      </button>
    </>
  );
}

export default RegisterButton;

import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterButton() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate("/register")}
        className="bg-[#fb5d16] hover:bg-orange-700 text-white px-6 py-3 rounded-full transition-all shadow-md text-center"
      >
        <span className="block text-lg font-semibold leading-tight">
          Register for Modi Yuva Marathon
        </span>
        <span className="block text-3xl font-medium">
          Register Now
        </span>
      </button>
    </>
  );
}

export default RegisterButton;

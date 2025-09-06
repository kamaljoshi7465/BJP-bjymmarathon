import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/admin");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-[#fb5d16] hover:bg-orange-700 text-white px-4 py-2 rounded text-sm"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

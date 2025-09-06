import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/admin")}
      className="bg-[#fb5d16] hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm"
    >
      Admin Login
    </button>
  );
};

export default AdminLoginButton;

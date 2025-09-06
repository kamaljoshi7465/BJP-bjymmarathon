import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Main content */}
      <div className="flex-grow max-w-6xl mx-auto px-4 py-6 w-full">
        {children}
      </div>

      {/* Fixed footer at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 md:py-4 mt-10 border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} Developed and managed by{" "}
        <a
          href="https://www.ryientsoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#fb5d16] font-semibold hover:underline"
        >
          Ryientsoft Technologies Pvt. Ltd.
        </a>
      </p>
    </footer>
  );
};

export default Footer;

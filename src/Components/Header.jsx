// import React from "react";
import BackButton from "./BackButton";
// import BackToHomeButton from "../Buttons/BackToHomeButton";
import AdminLoginButton from "../Buttons/AdminLoginButton";
import LogoutButton from "../Buttons/LogoutButton";
// import NavigationMenu from "../Menu/NavigationMenu";

const Header = ({
  heading,
  showBackButton = false,
  showAdminLoginButton = false,
  showAdminLogoutButton = false,
  backToHomePageButton = false,
}) => {
  return (
    <div className="relative flex justify-center px-4 py-4 border-b shadow-sm bg-white max-w-8xl mx-auto">
      {/* Back Button */}

      <div className="flex flex-col gap-4 mt-4">
        {showBackButton && <BackButton />}
      </div>

      {/* Back To Home Button */}
      {/* {backToHomePageButton && <BackToHomeButton />} */}

      {/* Heading (Centered) */}
      <div className="w-full flex-column">
        <h1 className="text-2xl font-bold text-[#fb5d16] flex-1 text-center">
          {heading}
        </h1>
        <div className="text-[#fb5d16] font-bold flex-1 text-center">
        </div>
        {/* <NavigationMenu /> */}
      </div>

      {/* Admin Login Button */}
      {showAdminLoginButton && <AdminLoginButton />}

      {/* Admin LogOut Button */}
      {showAdminLogoutButton && <LogoutButton />}
    </div>
  );
};

export default Header;

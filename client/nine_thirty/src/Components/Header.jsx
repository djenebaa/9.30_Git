import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import CartLogo from "./CartLogo";
import Identification from "./Identification";
import Admin from "./Admin";

function Header() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <div>
      <div className="">
        <Logo />
      </div>
      <div className="flex justify-end items-center space-x-5 mx-4">
        <div>
          <CartLogo />
        </div>
        {isAdmin && (
          <div>
            <Admin />
          </div>
        )}
          <Identification />
      </div>
      <div className="mx-4">
        <Navigation />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import logo from "../../images/react.png";

const MainHeader = () => {
  return (
    <div className="header_border pl-2 pt-3 py-2">
      <img src={logo} alt="react.png" className="header_logo" />
      <span className="h2 pt-4 m-2 text-white-50">React Course - CountOPedia</span>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <MainHeader />
    </div>
  );
};

export default Header;

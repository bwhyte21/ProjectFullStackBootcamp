import React from "react";
import logo from "../../images/react.png";

const MainHeader = () => {
  return (
    <div className="heading1 pl-2 pt-3 py-1">
      <img src={logo} alt="react.png" className="header-logo" />
      <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
    </div>
  );
};

const subHeaderStyle = {
  backgroundColor: "lightgray",
  color: "blueviolet",
  textAlign: "center",
};

const SubHeader = () => {
  return <p style={subHeaderStyle}>This will be an exciting course!</p>;
};

const Header = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
};

export default Header;

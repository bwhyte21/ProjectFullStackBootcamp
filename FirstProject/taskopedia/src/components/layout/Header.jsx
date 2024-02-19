import React from "react";
import logo from "../../images/react.png";

function MainHeader() {
  return (
    <div className="heading1 pl-2 pt-3 py-1">
      <img src={logo} alt="react.png" className="header-logo" />
      <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
    </div>
  );
}

const subHeaderStyle = {
  backgroundColor: "lightgray",
  color: "blueviolet",
  textAlign: "center",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course!</p>;
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

export default Header;

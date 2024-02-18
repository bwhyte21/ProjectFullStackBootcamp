import React from "react";

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
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

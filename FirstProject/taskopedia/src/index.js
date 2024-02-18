import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1 className="text-primary">REACT COURSE</h1>;
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

function MainBody() {
  return (
    <div>
      <p>In this course, we will learn ReactJS by building TaskOPedia!</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <footer style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</footer>;
}

root.render(
  <React.StrictMode>
    <div>
      <Header />
      <MainBody />
      <Footer />
    </div>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1>REACT COURSE</h1>;
}
function SubHeader() {
  return <p>This will be an exciting course!</p>;
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
  return <footer>Happy Coding!</footer>;
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

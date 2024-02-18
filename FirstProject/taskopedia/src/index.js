import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

function MainBody() {
  const whatWeWillLearn = "React JS";
  const numberOfLectures = 3;

  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOPedia! <br />
        Total lectures - {numberOfLectures}{" "}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/*<div>
      Enter task :{" "}
      <input maxLength={10} placeholder="Get Groceries"/>
  </div>*/}
    </div>
  );
}

function Students() {
  const fullName = "Kris Walley";
  const programmingExp = 2;
  return (
    <div className="container p-4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img src={`https://ui-avatars.com/api/?name=${fullName}`} className="w-100" alt={fullName} />
        </div>
        <div className="col-10">
          {fullName}
          <br />
          Programming Experience: {programmingExp} years
        </div>
      </div>
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
      <Students />
      <Footer />
    </div>
  </React.StrictMode>
);

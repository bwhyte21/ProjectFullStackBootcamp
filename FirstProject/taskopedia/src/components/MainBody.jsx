import React from "react";

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

export default MainBody;

import React from "react";
import Student from "./student/Student";
import StudentReview from "./student/StudentReview";

const MainBody = () => {
  const whatWeWillLearn = "React JS";
  const numberOfLectures = 3;

  return (
    <div className="px-4">
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building TaskOPedia! <br />
          Total lectures - {numberOfLectures}{" "}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        <div className="container row">Students Enrolled</div>
        <Student experience={2} name="Peter Parker">
          <StudentReview />
        </Student>
        <Student experience={5} name="Tony Stark">
          <StudentReview />
        </Student>
        <Student experience={7} name="James Howlett" />
      </div>
    </div>
  );
};

export default MainBody;

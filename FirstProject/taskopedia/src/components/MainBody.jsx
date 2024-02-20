import React from "react";
import Student from "./student/Student";
import StudentReview from "./student/StudentReview";
import { faker } from "@faker-js/faker";

const MainBody = () => {
  const whatWeWillLearn = "React JS";
  const numberOfLectures = 3;

  return (
    <div className="px-4">
      <div className="main-body_container">
        <p>
          In this course, we will learn {whatWeWillLearn} by building TaskOPedia! <br />
          Total lectures - {numberOfLectures}{" "}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        <div className="container row">Students Enrolled</div>
        <Student experience={2} name={faker.person.fullName()}>
          <StudentReview />
        </Student>
        <Student experience={5} name={faker.person.fullName()}>
          <StudentReview />
        </Student>
        <Student experience={7} name={faker.person.fullName()} />
      </div>
    </div>
  );
};

export default MainBody;

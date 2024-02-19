import React from "react";
import { faker } from "@faker-js/faker";

function Student(props) {
  return (
    <div className="container p-4">
      <div className="row border">
        <div className="col-2">
          <img src={faker.image.avatar()} className="w-100 py-2" alt={props.name} />
        </div>
        <div className="col-10">
          {props.name}
          <br />
          Programming Experience: {props.experience} years
        </div>
      </div>
    </div>
  );
}

export default Student;

import React from "react";
import { faker } from "@faker-js/faker";

const Student = (props) => {
  return (
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-2">
          <img src={faker.image.avatar()} className="w-100 py-2" alt={props.name} />
        </div>
        <div className="col-8">
          {props.name}
          <br />
          Programming Experience: {props.experience} years
        </div>
        <div className="col-2">
          {/* So apparently, if you drop a component (<StudentReview/>) between the parent tags(<Student ..props></Student>), it is considered a prop child... */}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Student;

import React from "react";

const StudentReview = () => {
  return (
    <div className="p-2">
      <i className="bi bi-hand-thumbs-up-fill text-success p-1" style={{ cursor: "pointer" }}></i>
      <i className="bi bi-hand-thumbs-down-fill text-danger p-1" style={{ cursor: "pointer" }}></i>
    </div>
  );
};

export default StudentReview;

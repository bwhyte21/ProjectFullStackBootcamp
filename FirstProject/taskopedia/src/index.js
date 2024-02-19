import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Student from "./components/Student";
import Footer from "./components/Footer";
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <MainBody />
      <div className="row">Students Enrolled</div>
      <Student experience={2} name="Peter Parker" />
      <Student experience={5} name="Tony Stark" />
      <Student experience={7} name="James Howlett" />
      <Footer />
    </div>
  </React.StrictMode>
);

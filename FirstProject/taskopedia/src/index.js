import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Students from "./components/Students";
import Footer from "./components/Footer";
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

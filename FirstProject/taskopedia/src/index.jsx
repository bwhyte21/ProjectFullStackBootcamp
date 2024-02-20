import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/layout/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/layout/Footer";
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="index-container">
      <Header />
      <MainBody />
      <Footer />
    </div>
  </React.StrictMode>
);

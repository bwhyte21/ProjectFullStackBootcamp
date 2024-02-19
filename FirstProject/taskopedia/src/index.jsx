import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/layout/Header";
import MainBody from "./components/layout/MainBody";
import Footer from "./components/layout/Footer";
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: "black", color: "gray" }}>
      <Header />
      <MainBody />
      <Footer />
    </div>
  </React.StrictMode>
);

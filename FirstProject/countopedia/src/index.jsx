import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/layout/Header";
import Counter from "./components/Counter";
import Footer from "./components/layout/Footer";
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Counter />
    <Footer />
  </React.StrictMode>
);

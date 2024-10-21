import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./global.css";
// import { useContext, useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// UseContext example

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
// css configuration
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    {/* sabhi error or warning wale pop ko show kr payenge  */}
    <ToastContainer />
  </div>
);

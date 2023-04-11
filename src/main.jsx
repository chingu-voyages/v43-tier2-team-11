import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./scss/main.scss";

//for mobile menu
import ModalContextProvider from "./store/ModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
);

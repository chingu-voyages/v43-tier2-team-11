import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantDetail />
  </React.StrictMode>
);

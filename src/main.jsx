import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":slug" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./profile/Login";
import Profile from "./profile/Profile";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

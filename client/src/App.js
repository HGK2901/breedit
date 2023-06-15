import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import FindPet from "./Pages/FindPet";
import Home from "./Pages/Home";
import OnBoarding from "./Components/OnBoarding";
import ChatPage from "./Pages/Chat";
import TinderPage from "./Components/tinderCard";
import Profile from "./Pages/Profile";

//login and registration
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";

//requirements
// const bodyParser = require("body-parser")
// const express = require("express");

// const app = express();
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/findPet" element={<FindPet />} />
      <Route path="/onboarding" element={<OnBoarding />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/tinderCard" element={<TinderPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

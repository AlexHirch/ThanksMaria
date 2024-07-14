import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./path/main";
import Navbar from "./navbar";
import Profile from "./path/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

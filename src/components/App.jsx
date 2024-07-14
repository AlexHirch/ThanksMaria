import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./path/main";
import Navbar from "./navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

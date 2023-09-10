import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Listing from "./Pages/Listing";


const App = () => {
  return (
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route path="/listing/:category/:cardData" element={<Detail />} />
      <Route path="/listing/:category" element={<Listing />} />
    </Routes>
  );
};

export default App;

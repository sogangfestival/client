import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Lost from "@pages/Lost";
import DetailLost from "@pages/DetailLost";
import AddLost from "@pages/AddLost";
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/lost/add" element={<AddLost />} />
        <Route path="/lost/:id" element={<DetailLost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;

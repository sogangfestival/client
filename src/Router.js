import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Lost from "@pages/Lost";
import DetailLost from "@pages/DetailLost";
import AddLost from "@pages/AddLost";
import Map from "@pages/Map";
import Food from "@pages/Food";
import Schedule from "@pages/Schedule";
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/food" element={<Food />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/lost/add" element={<AddLost />} />
        <Route path="/lost/:id" element={<DetailLost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;

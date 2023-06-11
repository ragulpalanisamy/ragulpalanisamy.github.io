import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./container/index";
import Guna from "./GunaCafe/guna";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/gunacafe" element={<Guna />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

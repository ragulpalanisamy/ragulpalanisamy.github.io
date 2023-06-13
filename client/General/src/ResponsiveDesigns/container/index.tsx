//import React from "react";
import { Routes, Route } from "react-router-dom";
import Coloured from "../coloredMarker/colouredMarker";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Coloured />} />
    </Routes>
  );
}

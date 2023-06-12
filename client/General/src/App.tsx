import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./container/index";
import Guna from "./GunaCafe/guna";
import Register from "./Register Form/register";
import BoxModel from "./BoxModel/BoxModel";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gunacafe" element={<Guna />} />
          <Route path="/boxmodel" element={<BoxModel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

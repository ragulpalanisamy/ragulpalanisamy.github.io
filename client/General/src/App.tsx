import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./ResponsiveDesigns/container/index";
import Guna from "./ResponsiveDesigns/GunaCafe/guna";
import Register from "./ResponsiveDesigns/Register Form/register";
import BoxModel from "./ResponsiveDesigns/BoxModel/BoxModel";
import FlexBox from "./ResponsiveDesigns/FlexBox/FlexBox";
import { flexBox } from "./ResponsiveDesigns/FlexBox/constants";

export default function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gunacafe" element={<Guna />} />
          <Route path="/boxmodel" element={<BoxModel />} />
          <Route path="/flexbox" element={<FlexBox image={flexBox} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

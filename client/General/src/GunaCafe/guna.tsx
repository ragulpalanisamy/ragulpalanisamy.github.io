import React from "react";

import Coffee from "./coffee";
import Dessert from "./Desserts";
import Footer from "./Footer";

export default function guna() {
  return (
    <>
      <div className="menu">
        <main>
          <h1>GUNA CAFE</h1>
          <p className="established">Est. 2020</p>
          <hr />
          <Coffee />
          <Dessert />
        </main>
        <hr className="bottom-line" />
        <Footer />
      </div>
    </>
  );
}

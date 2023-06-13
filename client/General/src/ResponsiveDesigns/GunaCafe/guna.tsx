import Coffee from "./Coffee";
import Dessert from "./Desserts";
import Footer from "./Footer";

import "../App.css";

export default function guna() {
  return (
    <section
      className="bg-[url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg)] p-5;
    font-family: sans-serif"
    >
      <div className="w-4/5 bg-[burlywood] max-w-[500px] mx-auto p-5">
        <main>
          <h1 className="text-center text-[40px] mt-0 mb-[15px]">GUNA CAFE</h1>
          <p className="text-center italic">Est. 2020</p>
          <hr />
          <Coffee />
          <Dessert />
        </main>
        <hr className="mt-[25px]" />
        <Footer />
      </div>
    </section>
  );
}

import "../../index.css";
import FlexBox from "../FlexBox/FlexBox";
import { flexBox } from "../FlexBox/constants";
import Footer from "../GunaCafe/Footer";

export default function BoxModel() {
  return (
    <>
      <div className="frame addressborder border-black border-solid border-black max-w-6xl mx-auto">
        <div className="canvas px-auto">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
      <FlexBox image={flexBox} />
      <Footer />
    </>
  );
}

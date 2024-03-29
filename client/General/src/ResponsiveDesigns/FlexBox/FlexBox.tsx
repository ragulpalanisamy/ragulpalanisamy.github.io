import "../../index.css";
import { IFlexBoxProps } from "./types";

export default function FlexBox({ image }: { image: IFlexBoxProps[] }) {
  return (
    <>
      <header className="header">
        <h1>css flexbox photo gallery</h1>
      </header>
      <div className="gallery">
        {image.map((item, index) => (
          <div key={index}>
            <a href="/painting">
              <img src={item.imgsrc} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

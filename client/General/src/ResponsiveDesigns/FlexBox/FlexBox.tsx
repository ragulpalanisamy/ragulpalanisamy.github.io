import "../../index.css";

interface IFlexBox {
  image: { imgSrc: string }[];
}
export default function FlexBox(props: IFlexBox): JSX.Element {
  const { image } = props;
  return (
    <>
      <header className="header">
        <h1>css flexbox photo gallery</h1>
      </header>
      {image.map((item, index) => (
        <div key={index} className="gallery">
          <img src={item.imgSrc} />
        </div>
      ))}
    </>
  );
}

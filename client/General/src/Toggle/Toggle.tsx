import { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }
  return (
    <>
      <div
        className="bg-gray-400 w-12 h-6 rounded-full p-1 
          text-center"
        onClick={handleClick}
      >
        <div
          className={`bg-white w-4 h-4  ${
            isOn ? "bg-red-500 transform translate-x-6" : ""
          } rounded-full shadow-sm`}
        ></div>
      </div>
      <p className="font-extrabold text-black text-center">toggle switch</p>
    </>
  );
}

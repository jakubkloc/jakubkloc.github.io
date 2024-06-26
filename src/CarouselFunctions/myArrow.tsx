import React from "react";
import NextBtn from "../components/NextBtn";
import { consts } from "@itseasy21/react-elastic-carousel";

interface MyArrowProps {
  type: string;
  onClick: () => void;
  isEdge: boolean;
  activeIndex: number;
  setActiveIndex: Function;
}

export default function myArrow({
  type,
  onClick,
  isEdge,
  setActiveIndex,
}: MyArrowProps): JSX.Element {
  function handleClick(direction: string) {
    setActiveIndex((prevIndex: number) => {
      if (direction === "prev") {
        return prevIndex > 0 ? prevIndex - 1 : prevIndex;
      } else if (direction === "next") {
        return prevIndex < 4 ? prevIndex + 1 : prevIndex;
      }
      return prevIndex; 
    });
    onClick();
  }

  if (window.innerWidth < 640) {
    return <></>;
  }

  // Prev button
  if (type === consts.PREV) {
    return (
      <div
        onClick={() => handleClick("prev")}
        className={`button-container absolute left-0 z-10 cursor-custom-action sm:top-[48%]  sm:h-16  sm:w-16 md:top-[40%]  md:h-32 
         md:w-24 ${isEdge ? "hidden" : ""}`}
      >
        <NextBtn />
      </div>
    );
    // Next button
  } else {
    if (isEdge) {
      return <></>;
    }
    return (
      <button
        onClick={() => handleClick("next")}
        className={`next-btn-animation button-container absolute right-0 z-10 cursor-custom-action  sm:top-[48%]  sm:h-16 sm:w-16  md:top-[40%] md:h-32
        md:w-24
        ${isEdge ? "hidden" : ""}`}
      >
        <NextBtn isRight={true} />
      </button>
    );
  }
}

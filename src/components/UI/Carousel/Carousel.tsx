import { memo, useEffect, useRef, useState } from "react";
import { resources } from "../../../data/slider";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import "./style.css";

let count = 0;
let slideInterval: NodeJS.Timeout;

export const Carousel: React.FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  if (slideRef.current) {
    slideRef.current.classList.add("fade-anim");
  }

  const removeAnimation = () => {
    if (slideRef.current) {
      slideRef.current.classList.remove("fade-anim");
    }
  };

  const handleOnNextClick = () => {
    count = (count + 1) % resources.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = resources.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 10000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  return (
    <div ref={slideRef} className="w-full relative select-none rounded-2xl">
      <img
        src={resources[currentIndex].imageUrl}
        className="slider-image slider shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]"
        alt=""
      />

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition outline-none"
          onClick={handleOnPrevClick}
        >
          <AiFillCaretLeft size={35} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition outline-none"
          onClick={handleOnPrevClick}
        >
          <AiFillCaretRight size={35} />
        </button>
      </div>
    </div>
  );
});

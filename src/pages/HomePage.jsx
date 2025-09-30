import React, { useState } from "react";
import { useSelector } from "react-redux";


export default function HomePage() {
  const slides = useSelector((state) => state.slider.slides);
  const [currentSlide, setCurrentSlide] = useState(slides.herofirst.image);

  function changeSlide() {
    if (currentSlide === slides.herofirst.image) {
      setCurrentSlide(slides.herosecond.image);
    } else {
      setCurrentSlide(slides.herofirst.image);
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full overflow-hidden relative">     

      <img
        src={currentSlide}
        alt="Hero 1"
        className="md:w-full  overflow-hidden relative object-cover z-1"
      />

      <button onClick={changeSlide}       
        className={`${
          currentSlide === slides.herofirst.image ? "hidden" : ""
        } absolute top-1/2 left-4 -translate-y-1/2 bg-white text-black p-2 rounded-full z-10 shadow`}
      >
        {"<"}
      </button>
      <button onClick={changeSlide}
        className={`${
          currentSlide === slides.herosecond.image ? "hidden" : ""
        } absolute top-1/2 right-4 -translate-y-1/2 bg-white text-black p-2 rounded-full z-10 shadow`}
      >
        {">"}
      </button>
    </div>
  );
}



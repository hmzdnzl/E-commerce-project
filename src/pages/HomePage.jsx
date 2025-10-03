import React, { useState } from "react";
import { useSelector } from "react-redux";
import Categories from "../layout/categories";
import ProductCards from "../layout/productCards";
import ProductSlider from "../layout/productSlider";
import AdvicedProduct from "../layout/advicedProduct";
import FeaturedProducts from "../layout/FeaturedProducts";


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

  return (
    <section>
      <header >
      <div
        className={`w-full h-[716px] relative font-montserrat bg-cover bg-center items-center bg-no-repeat flex flex-col ${
          currentSlide === slides.herofirst.image
            ? "md:items-end"
            : "md:items-start"
        } justify-center`}
        style={{ backgroundImage: `url(${currentSlide})` }}
      >
        <div className="flex flex-col items-center justify-center w-[55%] z-10">
          <h1 className="text-[16px] font-bold text-white flex text-center z-10 mb-2">
            {currentSlide === slides.herofirst.image
              ? slides.herofirst.title
              : slides.herosecond.title}
          </h1>
          <h2 className="md:text-[58px] text-[40px] font-bold text-center text-white z-10 mb-2">
            {currentSlide === slides.herofirst.image
              ? slides.herofirst.subtitle
              : slides.herosecond.subtitle}
          </h2>
          <p className="text-[20px] text-white flex text-center z-10 w-2/3 md:w-1/2 mb-4">
            {currentSlide === slides.herofirst.image
              ? slides.herofirst.description
              : slides.herosecond.description}
          </p>
          <button className="text-[24px] bg-[#2DC071] w-[221px] h-[62px] text-white px-6 py-3 rounded-[5px]  font-bold z-10 hover:bg-[#1b82c9] transition mb-6">
            SHOP NOW
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center z-20">
            <div className={`bg-white w-[62px] h-[10px]  ${currentSlide === slides.herosecond.image ? "opacity-50" : ""}`}></div>
            <div className={`bg-white w-[62px] h-[10px]  ${currentSlide === slides.herofirst.image ? "opacity-50" : ""}`}></div>
          </div>
        </div>
        <div className="w-full absolute flex justify-between px-4">
          <button
            onClick={changeSlide}
            className="text-6xl text-white p-2 rounded-full z-10 shadow cursor-pointer"
            aria-label="Previous slide"
          >
            {"<"}
          </button>
          <button
            onClick={changeSlide}
            className="text-6xl text-white p-2 rounded-full z-10 shadow cursor-pointer"
            aria-label="Next slide"
          >
            {">"}
          </button>
        </div>       
      </div>
    
       </header>
      <Categories />
      <ProductCards />
      <ProductSlider />
      <AdvicedProduct />      
      <FeaturedProducts />

    </section>
  );
}

{
  /*
  
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

  */
}

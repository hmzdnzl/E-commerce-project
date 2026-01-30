import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProductSlider() {
  const productSlides = useSelector((state) => state.productSlider.slides);
  const [currentProductSlide, setCurrentProductSlide] = useState(
    productSlides[0].image,
  );

  function changeProductSlide() {
    if (currentProductSlide === productSlides[0].image) {
      setCurrentProductSlide(productSlides[1].image);
    } else {
      setCurrentProductSlide(productSlides[0].image);
    }
  }

  return (
    <section
      className="w-full pt-20 flex relative flex-col h-[1230px] bg-[#23856D]  font-montserrat 
      md:h-[710px] md:flex-row md:flex md:pb-[0] md:px-10 md:items-start md:justify-between"
      style={{
        width: "100%",
      }}
    >
      <div
        className="w-full absolute left-0 bottom-0 z-0 h-[651px] md:h-[600px] product-slider-bg"
        style={{
          backgroundImage: `url(${currentProductSlide})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      ></div>
      <style>{`
        @media (min-width: 768px) {
          .product-slider-bg {
            background-position: right bottom !important;
            width: 85%;
          }
        }
      `}</style>
      <nav className="h-full md:flex hidden items-center">
        <button
          onClick={changeProductSlide}
          className="text-6xl text-white p-2 rounded-full z-10 shadow cursor-pointer"
        >
          <span>&lt;</span>
        </button>{" "}
      </nav>
      <div className="w-full flex mt-0 flex-col gap-y-1 md:w-[75%] md:flex md:flex-row md:items-start md:justify-center md:gap-x-5">
        <div className="md:w-[35%] w-full pt-20  md:gap-y-10 flex justify-between items-center flex-row">
          <nav className="h-full flex md:hidden items-end">
            <button
              onClick={changeProductSlide}
              className="text-6xl text-white p-2 rounded-full z-10 shadow cursor-pointer"
            >
              <span>&lt;</span>
            </button>{" "}
          </nav>
          <section className="md:flex md:flex-col md:items-start md:ml-[-50px] flex flex-col gap-y-7 items-center  ">
            <h1 className="text-[#FFFFFF] text-[20px]">
              {currentProductSlide === productSlides[0].image
                ? productSlides[0].title
                : productSlides[1].title}
            </h1>
            <h2 className="font-bold text-[#FFFFFF] text-[40px] text-center md:text-left h-[140px]   md:text-[58px] ">
              {currentProductSlide === productSlides[0].image
                ? productSlides[0].title2
                : productSlides[1].title2}
            </h2>
            <p className="text-[#FFFFFF]  text-[14px] flex flex-wrap h-[100px] md:w-[350px] ">
              {currentProductSlide === productSlides[0].image
                ? productSlides[0].description
                : productSlides[1].description}
            </p>
            <div className="flex flex-wrap gap-x-7 justify-center items-center">
              <span className="text-[#FFFFFF] text-[24px] font-bold ">
                {currentProductSlide === productSlides[0].image
                  ? productSlides[0].price
                  : productSlides[1].price}
              </span>
              <button className="bg-[#2DC071] text-[#FFFFFF] w-[181px] h-[52px] font-bold text-[14px] rounded">
                ADD TO CART
              </button>
            </div>
          </section>
          <nav className="h-full flex md:hidden items-end">
            <button
              onClick={changeProductSlide}
              className="text-6xl text-white p-2 rounded-full z-10 shadow cursor-pointer"
            >
              <span>&gt;</span>
            </button>{" "}
          </nav>
        </div>
        <div className="md:h-[600px] w-[295px] md:flex hidden md:items-end py-11">
          <div
            className={`bg-white w-[62px] h-[10px] ${
              currentProductSlide === productSlides[1].image ? "opacity-50" : ""
            }`}
          ></div>
          <div
            className={`bg-white w-[62px] h-[10px] ${
              currentProductSlide === productSlides[0].image ? "opacity-50" : ""
            }`}
          ></div>
        </div>
      </div>
      <nav className="h-full md:flex hidden items-center">
        <button
          onClick={changeProductSlide}
          className="text-6xl text-white p-2 rounded-full z-10 shadow cursor-pointer"
        >
          <span>&gt;</span>
        </button>
      </nav>
    </section>
  );
}

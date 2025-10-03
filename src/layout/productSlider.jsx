import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProductSlider() {
  const productSlides = useSelector((state) => state.productSlider.slides);
  const [currentProductSlide, setCurrentProductSlide] = useState(
    productSlides[0].image
  );

  function changeProductSlide() {
    if (currentProductSlide === productSlides[0].image) {
      setCurrentProductSlide(productSlides[1].image);
    } else {
      setCurrentProductSlide(productSlides[0].image);
    }
  }

  return (
    <section className="w-full pt-40 flex md:flex-row flex-col md:pb-[0] md:h-[711px] h-[1300px]  bg-[#23856D] 
    md:px-10 md:items-end md:justify-between font-montserrat md:flex">
      <nav className="h-full md:flex hidden items-center">
        <button
          onClick={changeProductSlide}
          className="text-6xl text-white p-2 rounded-full z-10 shadow cursor-pointer"
        >
          <span>&lt;</span>
        </button>{" "}
      </nav>
      <div className="md:w-[75%] w-full flex mt-20 flex-col items-end h-[600px] gap-y-11 md:flex md:flex-row md:items-start md:justify-center md:gap-x-5">
        <div className="md:w-[35%] w-full pt-20  md:gap-y-10 flex justify-between items-center flex-row">
          <nav className="h-full flex md:hidden items-end">
            <button
              onClick={changeProductSlide}
              className="text-6xl text-white p-2 rounded-full z-10 shadow cursor-pointer"
            >
              <span>&lt;</span>
            </button>{" "}
          </nav>
          <section className="flex flex-col gap-y-7 items-center">
            <h1 className="text-[#FFFFFF] text-[20px] ">
              {currentProductSlide === productSlides[0].image
                ? productSlides[0].title
                : productSlides[1].title}
            </h1>
            <h2 className="font-bold text-[#FFFFFF] text-[40px] md:text-[58px] ">
              {currentProductSlide === productSlides[0].image
                ? productSlides[0].title2
                : productSlides[1].title2}
            </h2>
            <p className="text-[#FFFFFF] text-[14px] w-[341px] ">
              {currentProductSlide === productSlides[0].image
                ? productSlides[0].description
                : productSlides[1].description}
            </p>
            <div className="flex gap-x-7 items-center">
              <span className="text-[#FFFFFF] text-[24px] font-bold ">
                {currentProductSlide === productSlides[0].image
                  ? productSlides[0].price
                  : productSlides[1].price}
              </span>
              <button className="bg-[#2DC071] text-[#FFFFFF] font-bold px-4 py-2 rounded">
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
        <div className="h-full w-[145px] md:flex hidden items-end py-11">
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
        <div className="md:w-[443px] w-full md:h-[599px] h-[680px] md:object-cover">
          <img
            src={currentProductSlide}
            alt="product"
            className="w-full h-full object-cover object-top"
          />
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

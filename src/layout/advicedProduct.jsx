import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function AdvicedProduct() {
  const adviced = useSelector((state) => state.advicedProduct.advicedProducts);
  return (
    <div className="w-full mt-40 md:mt-0 flex flex-col md:flex md:flex-row md:justify-center md:gap-x-10 ">
      <div className="md:h-[682px] md:w-[705px] mx-auto object-cover md:order-1 mt-10 md:mr-14 order-2 flex justify-center">
        <img
          className="md:w-[700px] md:h-[775px] w-full h-auto object-cover object-bottom mt-[-90px] mx-auto"
          src={adviced.image}
        />
      </div>
      <section className="md:flex mb-10 md:flex-col mx-auto md:mx-0 flex flex-col md:order-2 order-1 justify-center gap-y-7 md:px-20 font-montserrat">
        <h1 className="text-[16px md:text-left text-center font-bold text-[#BDBDBD]">{adviced.title}</h1>
        <h2 className="text-[40px] md:text-left text-center w-[389px] h-[100px] font-bold text-[#252B42]">{adviced.title2}</h2>
        <p className="w-[376px] text-[#737373] md:text-left text-center text-[20px]">{adviced.description}</p>
        <div className="md:flex md:flex-row flex flex-col gap-y-4 md:mx-0 mx-auto md:gap-x-4">
          <button className="md:bg-[#2DC071] bg-[#23A6F0] text-[#FFFFFF] font-bold px-4 py-2 rounded">
            BUY NOW
          </button>
          <button className="bg-[#FFFFFF] md:text-[#2DC071] text-[#23A6F0] font-bold px-4 py-2 rounded border border-[#23A6F0]">
            READ MORE
          </button>
        </div>
      </section>
    </div>
  );
}

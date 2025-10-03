import React from "react";
import { useSelector } from "react-redux";

export default function ShopCategories() {
  const shopCategories = useSelector(
    (state) => state.shopCategories.shopCategories
  );

  return (
    <div className="md:flex md:flex-row flex gap-x-4 gap-y-4 flex-wrap justify-center">
      {shopCategories.map((category) => (
        <div
          className="w-[331px] h-[300px] md:w-[204px] md:h-[223px] relative overflow-hidden font-montserrat"
          key={category.id}
        >
          <img src={category.image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white font-bold md:gap-y-3 gap-y-5">
            <h1 className="text-[16px]">{category.title}</h1>
            <span className="text-[14px]">{category.item}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

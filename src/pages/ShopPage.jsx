import React from "react";
import ShopCategories from "../layout/ShopCategories";

export default function ShopPage() {
  return (
    <div className="flex flex-col items-center font-montserrat justify-center">
      <section className="md:flex text-center md:justify-between md:w-[70%]">
      <h1 className="font-bold text-[24px] text-[#252B42]">Shop</h1>
     
      <div className="items-center flex gap-x-4 mt-2 mb-10">
        <a href="/" className="font-bold text-[#252B42]">
          Home
        </a>
        <span className="text-[#BDBDBD] gap-x-4 flex">
          {">"} <span className="text-[#BDBDBD] font-bold">Shop</span>
        </span>
      </div>
      </section>
       <ShopCategories />
    </div>
  );
}

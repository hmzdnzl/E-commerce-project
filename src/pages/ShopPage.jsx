import React, { useState } from "react";
import ShopCategories from "../layout/ShopCategories";
import ShopProducts from "../layout/ShopProducts";
import { LayoutGrid, List } from "lucide-react";
import Brands from "../layout/Brands";

export default function ShopPage() {
  const [view, setView] = useState("grid");
  const [desktopPiece, setDesktopPiece] = useState("");
  const [mobilePiece, setMobilePiece] = useState("");

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
      <section className="my-10 flex flex-col gap-y-6 items-center justify-center md:flex md:flex-row md:justify-between md:w-[55%]">
        <div className="font-bold text-[14px] text-[#737373] flex">
          Showing all{" "}
          <span className="md:flex hidden">&nbsp;{" " + desktopPiece}</span>
          <span className="md:hidden">&nbsp;{" " + mobilePiece}</span> &nbsp; results
        </div>
        <div className="flex items-center gap-x-4">
          <span className="font-bold text-[14px] text-[#737373]">Views:</span>
          <span className="flex gap-x-2">
            <button
              className={`border w-[48px] h-[46px] items-center flex justify-center rounded-[5px] ${
                view === "grid" ? "bg-[#23A6F0] text-white" : ""
              }`}
              onClick={() => setView("grid")}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              className={`border w-[48px] h-[46px] items-center flex justify-center rounded-[5px] ${
                view === "list" ? "bg-[#23A6F0] text-white" : ""
              }`}
              onClick={() => setView("list")}
            >
              <List className="w-5 h-5" />
            </button>
          </span>
        </div>
        <div className="flex gap-x-4">
          <select className="rounded-[5px] text-[14px] text-[#737373] border border-[#DDDDDD] bg-[#F9F9F9] w-[141px] h-[50px]">
            <option value="grid">Popularity</option>
            <option value="list">Price</option>
          </select>
          <button className="rounded-[5px] text-[14px] w-[94px] h-[50px] font-bold text-[#FFFFFF] bg-[#23A6F0]">
            Filter
          </button>
        </div>
      </section>
      <ShopProducts
        desktopPiece={desktopPiece}
        setDesktopPiece={setDesktopPiece}
        mobilePiece={mobilePiece}
        setMobilePiece={setMobilePiece}
      />
      <Brands />
    </div>
  );
}

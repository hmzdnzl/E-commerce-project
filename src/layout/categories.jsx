import React from "react";
import { useSelector } from "react-redux";

export default function Categories() {
  const categories = useSelector((state) => state.category.categories) || [];
  const menCategory = categories.find(cat => cat.gender === "e");
  const womenCategory = categories.find(cat => cat.gender === "k");
  const accessoriesCategory = categories.find(cat => cat.title?.toLowerCase().includes("aksesuar") || cat.title?.toLowerCase().includes("accessory"));
  const kidsCategory = categories.find(cat => cat.title?.toLowerCase().includes("çocuk") || cat.title?.toLowerCase().includes("kid"));

  return (
    <div className="font-montserrat flex justify-center my-10 ">
      <section className="md:flex flex md:flex-row flex-col md:gap-x-4 gap-y-4">
        <div
          className="flex relative items-end w-[323px] md:w-[509px] h-[500px]"
          style={{
            backgroundImage: menCategory ? `url(${menCategory.img})` : undefined,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: !menCategory ? '#eee' : undefined
          }}
        >
          <button className=" w-[170px] h-[48px] bg-white font-bold border flex items-center justify-center text-[16px] m-6 ">
            MEN
          </button>
        </div>
        <div className="md:flex md:gap-x-4 md:flex-row flex flex-col gap-y-4">
          <div
            className="h-[500px] md:w-[239px] bg-cover bg-no-repeat bg-center flex items-end"
            style={{
              backgroundImage: womenCategory ? `url(${womenCategory.img})` : undefined,
              backgroundColor: !womenCategory ? '#eee' : undefined
            }}
          >
            <button className=" bg-white w-[136px] font-bold h-[48px] m-6 border z-10 ">
              WOMEN
            </button>
          </div>
          <section className="md:flex md:flex-col flex flex-col gap-y-[19px]">
            <div
              className="flex bg-cover bg-center md:h-[48%] md:w-[239px] w-[323px] h-[242px] bg-no-repeat items-end"
              style={{
                backgroundImage: accessoriesCategory ? `url(${accessoriesCategory.img})` : undefined,
                backgroundColor: !accessoriesCategory ? '#eee' : undefined
              }}
            >
              <button className=" bg-white w-[136px] font-bold h-[48px] border z-10 m-4 ">
                ACCESSORIES
              </button>
            </div>
            <div
              className="relative bg-cover bg-center md:h-[48%] md:w-[239px] w-[323px] h-[242px] bg-no-repeat flex items-end"
              style={{
                backgroundImage: kidsCategory ? `url(${kidsCategory.img})` : undefined,
                backgroundColor: !kidsCategory ? '#eee' : undefined
              }}
            >
              <button className=" bg-white w-[136px] font-bold h-[48px] border z-10 m-4 ">
                KIDS
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";

export default function Categories() {
  const categories = useSelector((state) => state.category.categories);
  return (
    <div className="font-montserrat flex justify-center my-10 ">
      <section className="md:flex flex md:flex-row flex-col md:gap-x-4 gap-y-4">
        <div
          className="flex relative items-end w-[323px] md:w-[509px] h-[500px]"
          style={{
            backgroundImage: `url(${categories[0].image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className=" w-[170px] h-[48px] bg-white font-bold border flex items-center justify-center text-[16px] m-6 ">
            Men
          </button>
        </div>
        <div className="md:flex md:gap-x-4 md:flex-row flex flex-col gap-y-4">
          <div
            className="h-[500px] md:w-[239px] bg-cover bg-no-repeat bg-center flex items-end"
            style={{ backgroundImage: `url(${categories[1].image})` }}
          >
            <button className=" bg-white w-[136px] font-bold h-[48px] m-6 border z-10 ">
              WOMEN
            </button>
          </div>
          <section className="md:flex md:flex-col flex flex-col gap-y-[19px]">
            <div
              className="flex bg-cover bg-center md:h-[48%] md:w-[239px] w-[323px] h-[242px] bg-no-repeat items-end"
              style={{ backgroundImage: `url(${categories[3].image})` }}
            >
              <button className=" bg-white w-[136px] font-bold h-[48px] border z-10 m-4 ">
                KIDS
              </button>
            </div>
            <div
              className="relative bg-cover bg-center md:h-[48%] md:w-[239px] w-[323px] h-[242px] bg-no-repeat flex items-end"
              style={{ backgroundImage: `url(${categories[2].image})` }}
            >
              <button className=" bg-white w-[136px] font-bold h-[48px] border z-10 m-4 ">
                WOMEN
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

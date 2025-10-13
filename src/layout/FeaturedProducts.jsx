import React from "react";
import { useSelector } from "react-redux";
import { AlarmClock } from "lucide-react";
import { LineChart } from "lucide-react";

export default function FeaturedProducts() {
  const featuredProducts = useSelector((state) => state.featured.features);

  return (
    <section className="flex flex-col text-center items-center my-20 font-montserrat justify-center">
      <div className="w-[40%] py-12 gap-y-5">
        <h1 className="text-[#23A6F0] font-bold">Practice Advice</h1>
        <h2 className="font-bold text-[40px] text-[#252B42]">Featured Posts</h2>
        <p className="text-[#737373] text-[14px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="md:flex md:flex-row w-[90%] md:-[348px] flex flex-col md:justify-center md:gap-x-5 items-center gap-y-5">
        {featuredProducts.map((product) => (
          <div key={product.id} className="my-5 w-[80%] border md:w-[348px] md:flex md:flex-col md:items-center flex flex-col gap-y-5">
            <img
              src={product.image}
              alt={product.title}
              className=" object-cover md:w-[348px] md:h-[300px]"
            />
            <section className="md:w-[348px]  m-5 px-5 flex flex-col gap-y-4">
              <nav className="flex gap-x-4 text-[12px]">
                <a href="/" className="text-[#8EC2F2] text-[14px] ">
                  {" "}
                  {product.tab1}{" "}
                </a>
                <a href="/" className="text-[#737373] text-[14px] ">
                  {" "}
                  {product.tab2}{" "}
                </a>
                <a href="/" className="text-[#737373] text-[14px] ">
                  {" "}
                  {product.tab3}{" "}
                </a>
              </nav>
              <h3 className="font-bold text-[20px] text-left w-[85%] text-[#252B42]">
                {product.title}
              </h3>
              <p className="text-[#737373] text-left tracking-[0.2px] leading-[20px] text-[14px] w-[90%]">
                {product.description}
              </p>
              <div className="flex justify-between md:gap-x-10 flex-wrap">
                <div className="flex gap-x-2 items-center">
                  <AlarmClock size={16} className="text-[#23A6F0]" />
                  <span className="text-[#737373] text-[12px]">
                    {product.date}
                  </span>
                </div>
                <div className="flex gap-x-2">
                  {" "}
                  <LineChart size={16} className="text-[#23856D]" /> <span className="text-[#737373] text-[12px]">{product.comments}</span>
                </div>
              </div>
              <a href="/" className="text-[#737373] text-left font-bold">
                Learn More{" "}
                <span className=" items-center text-[#23A6F0]">{">"}</span>{" "}
              </a>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}

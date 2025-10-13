import React from "react";
import { useSelector } from "react-redux";
export default function ProductCards() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="font-montserrat text-center ">
      <header>
        <p className="text-[#737373] text-[20px]">Featured Products</p>
        <h1 className="text-[#252B42] font-bold text-[24px]">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-[#737373] text-[14px]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </header>
      <section className="w-full flex items-center justify-center">
        <div className="flex justify-center flex-wrap md:w-[65%] w-[60%]">
          {products.map((product) => (
            <div
              key={product.id}
              className=" my-12 mx-3 flex flex-col font-montserrat "
            >
              <a href="#">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-t-lg w-[239px] h-[427px] object-cover"
                />
              </a>
              <div className="p-4">
                <h5 className="text-lg font-bold">{product.name}</h5>
                <p className="text-gray-500">{product.name2}</p>
                <div className="flex justify-center gap-x-3 mt-4">
                  <span className="text-xl text-[#BDBDBD] font-bold">{product.price1}</span>
                  <span className="text-xl font-bold  text-[#23856D]">
                    {product.price2}
                  </span>
                </div>
              </div>
              <section className="flex justify-center gap-x-2">
                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

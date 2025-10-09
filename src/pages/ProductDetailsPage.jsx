import BestSeller from "../layout/bestSeller";
import Brands from "../layout/Brands";
import ProductDetail from "../layout/productDetail";
import { useState } from "react";

export default function ProductDetails() {
  const [productName, setProductName] = useState("Product Name");

  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <section className="md:flex md:mx-auto md:justify-end md:w-[70%] gap-y-10 flex flex-col">
        

        <div className="items-center justify-center flex gap-x-4 mt-2 mb-10 md:flex md:justify-end">
          <a href="/" className="font-bold text-[#252B42]">
            Home
          </a>
          <span className="text-[#BDBDBD] gap-x-4 flex">
            {">"} </span>
          <a href="/shop" className="font-bold text-[#252B42]">
            Shop
          </a>
          <span className="text-[#BDBDBD] gap-x-4 flex">
            {">"} <span className="text-[#BDBDBD] font-bold">{productName}</span>
          </span>
        </div>
      </section>
      </div>
      <ProductDetail productName={productName} setProductName={setProductName} />
      <BestSeller />
      <Brands />
    </div>

  );
}

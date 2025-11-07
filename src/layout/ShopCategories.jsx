import React from "react";
import { useSelector } from "react-redux";

export default function ShopCategories() {
  const shopCategories = useSelector(
    (state) => state.shopCategories.shopCategories
  );

  const categories = useSelector((state) => state.category.categories);
  const womenCategories = categories.filter(cat => cat.gender === "k");
  const menCategories = categories.filter(cat => cat.gender === "e");

  const bestFiveCategories = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);
console.log(bestFiveCategories, "best");

  return (
    <div className="md:flex md:flex-row flex gap-x-4 gap-y-4 flex-wrap justify-center">
      {bestFiveCategories.map((category) => (
        <div
          className="w-[331px] h-[300px] md:w-[204px] md:h-[223px] relative overflow-hidden font-montserrat"
          key={category.id}
        >
          <img src={category.img} alt={category.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white font-bold md:gap-y-3 gap-y-5">
            <h1 className="text-[16px]">{category.title}</h1>
            <span className="text-[14px]">Rating: {category.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );

}




{/*
<div className="flex gap-8 justify-center">
    <div className="flex flex-col min-w-[100px]">
      <span className="font-bold text-[#252B42] px-2 mb-2">Kadın</span>
      {womenCategories.map(cat => (
        <a
          key={cat.id}
          href={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`}
          className="px-2 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
        >
          <img src={cat.img} alt={cat.title} className="w-6 h-6" />
          {cat.title}
        </a>
      ))}
    </div>
    <div className="flex flex-col min-w-[100px]">
      <span className="font-bold text-[#252B42] px-2 mb-2">Erkek</span>
      {menCategories.map(cat => (
        <a
          key={cat.id}
          href={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`}
          className="px-2 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
        >
          <img src={cat.img} alt={cat.title} className="w-6 h-6" />
          {cat.title}
        </a>
      ))}
    </div>
  </div>
*/
}
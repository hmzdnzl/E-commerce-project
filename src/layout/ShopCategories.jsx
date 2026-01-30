import React from "react";
import { useSelector } from "react-redux";

export default function ShopCategories() {
  const shopCategories = useSelector(
    (state) => state.shopCategories.shopCategories,
  );

  const categories = useSelector((state) => state.category.categories);
  const womenCategories = categories.filter((cat) => cat.gender === "k");
  const menCategories = categories.filter((cat) => cat.gender === "e");

  const bestFiveCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="md:flex md:flex-row flex gap-x-4 gap-y-4 flex-wrap justify-center">
      {bestFiveCategories.map((category) => (
        <a
          key={category.id}
          href={`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.title.toLowerCase()}/${category.id}`}
          className="w-[331px] h-[300px] md:w-[204px] md:h-[223px] relative overflow-hidden font-montserrat block group"
        >
          <img
            src={category.img}
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white font-bold md:gap-y-3 gap-y-5">
            <h1 className="text-[16px]">{category.title}</h1>
            <span className="text-[14px]">Rating: {category.rating}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

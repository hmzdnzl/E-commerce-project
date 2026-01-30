import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ShopProducts(props) {
  const {
    desktopPiece,
    setDesktopPiece,
    mobilePiece,
    setMobilePiece,
    sort,
    filter,
    products: pagedProducts,
    page = 1,
    pageSize = 25,
  } = props;

  const products =
    pagedProducts || useSelector((state) => state.shopProducts.shopProducts);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = [...products];   
    if (filter) {
      filtered = filtered.filter(
        (p) =>
          p.name?.toLowerCase().includes(filter.toLowerCase()) ||
          p.description?.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    if (sort && sort.key) {
      filtered.sort((a, b) => {
        const aVal = a[sort.key] ?? 0;
        const bVal = b[sort.key] ?? 0;
        if (sort.order === "asc") return aVal - bVal;
        else return bVal - aVal;
      });
    }
    setFilteredProducts(filtered);
    if (setDesktopPiece) setDesktopPiece(filtered.length);
    if (setMobilePiece) setMobilePiece(filtered.length);
  }, [products, sort, filter, setDesktopPiece, setMobilePiece]);
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const pagedProductsToShow = filteredProducts.slice(startIdx, endIdx);

  return (
    <div className="font-montserrat w-full">
      <div className="grid grid-cols-1 md:hidden gap-6 px-2">
        {pagedProductsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryName={product.category_name || ""}
            gender={product.gender || ""}
          />
        ))}
      </div>

      <div className="hidden md:flex justify-center gap-4 gap-x-5 md:w-[75%] md:justify-center md:items-center mx-auto px-4 flex-wrap">
        {pagedProductsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryName={product.category_name || ""}
            gender={product.gender || ""}
          />
        ))}
      </div>
    </div>
  );
}

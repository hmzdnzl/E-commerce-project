import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ShopProducts(props) {
  const { desktopPiece, setDesktopPiece, mobilePiece, setMobilePiece, sort, filter, products: pagedProducts, page = 1, pageSize = 25 } = props;

  const products = pagedProducts || useSelector((state) => state.shopProducts.shopProducts);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = [...products];
    // Filtre uygula
    if (filter) {
      filtered = filtered.filter(p =>
        p.name?.toLowerCase().includes(filter.toLowerCase()) ||
        p.description?.toLowerCase().includes(filter.toLowerCase())
      );
    }
    if (sort && sort.key) {
      filtered.sort((a, b) => {
        const aVal = a[sort.key] ?? 0;
        const bVal = b[sort.key] ?? 0;
        if (sort.order === 'asc') return aVal - bVal;
        else return bVal - aVal;
      });
    }
    setFilteredProducts(filtered);
    if (setDesktopPiece) setDesktopPiece(filtered.length);
    if (setMobilePiece) setMobilePiece(filtered.length);
  }, [products, sort, filter, setDesktopPiece, setMobilePiece]);

  // Sayfalama: sadece ilgili sayfanın ürünlerini göster
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
            categoryName={product.category_name || ''}
            gender={product.gender || ''}
          />
        ))}
      </div>

      <div className="hidden md:flex justify-center gap-4 gap-x-5 md:w-[75%] md:justify-center md:items-center mx-auto px-4 flex-wrap">
        {pagedProductsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryName={product.category_name || ''}
            gender={product.gender || ''}
          />
        ))}
      </div>
    </div>
  );
}

{/*


  useEffect(() => {
    setDesktopPiece(products.length);
    setMobilePiece(currentPage.length);
  }, [products.length, setDesktopPiece, setMobilePiece]);



 function firstPageClick() {
    setCurrentPage(firstPage);
    setActivePage(1);
  }

  function activePages(page) {
    if (page === 1) {
      setCurrentPage(firstPage);
    } else if (page === 2) {
      setCurrentPage(secondPage);
    } else if (page === 3) {
      setCurrentPage(thirdPage);
    }
  }

  function handleNextPage() {
    if (currentPage === firstPage) {
      setCurrentPage(secondPage);
      setActivePage(2);
    } else if (currentPage === secondPage) {
      setCurrentPage(thirdPage);
      setActivePage(3);
    }
  }




   <section className="md:hidden flex justify-center">
        <button
          className="text-[#BDBDBD] rounded-tl-[5px] rounded-bl-[5px] bg-[#F3F3F3] font-bold w-[83px] h-[74px] border border-[#BDBDBD] "
          onClick={firstPageClick}
        >
          First
        </button>
        <button
          className={`${
            currentPage === firstPage ? "bg-[#23A6F0] text-white" : ""
          }  w-[46px] h-[74px] border text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white`}
          onClick={() => activePages(1)}
        >
          1
        </button>
        <button
          className={`${
            currentPage === secondPage ? "bg-[#23A6F0] text-white" : ""
          } w-[46px] h-[74px] border text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white`}
          onClick={() => activePages(2)}
        >
          2
        </button>
        <button
          className={`${
            currentPage === thirdPage ? "bg-[#23A6F0] text-white" : ""
          } w-[46px] h-[74px] border text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white`}
          onClick={() => activePages(3)}
        >
          3
        </button>
        <button
          className="text-[#23A6F0] rounded-tr-[5px] rounded-br-[5px] bg-[#F3F3F3] font-bold w-[83px] h-[74px] border border-[#BDBDBD] "
          onClick={handleNextPage}
        >
          Next
        </button>
      </section>



      <section className="hidden md:flex md:justify-center ">
          <button
            className="text-[#BDBDBD] rounded-tl-[5px] rounded-bl-[5px] bg-[#F3F3F3] font-bold w-[83px] h-[74px] border border-[#BDBDBD] "
            onClick={firstPageClick}
          >
            First
          </button>
          <button
            className={`${
              currentPage === firstPage ? "bg-[#23A6F0] text-white" : ""
            }  w-[46px] h-[74px] border text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white`}
            onClick={() => activePages(1)}
          >
            1
          </button>
          <button
            className="text-[#23A6F0] rounded-tr-[5px] rounded-br-[5px] bg-[#F3F3F3] font-bold w-[83px] h-[74px] border border-[#BDBDBD] "
            onClick={handleNextPage}
          >
            Next
          </button>
        </section>

*/}

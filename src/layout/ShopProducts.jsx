import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ShopProducts(props) {
  const { desktopPiece, setDesktopPiece, mobilePiece, setMobilePiece } = props;
  const products = useSelector((state) => state.shopProducts.shopProducts);
  const [firstPage, setFirstPage] = useState(products.slice(0, 4));
  const [secondPage, setSecondPage] = useState(products.slice(4, 8));
  const [thirdPage, setThirdPage] = useState(products.slice(8, 12));
  const [currentPage, setCurrentPage] = useState(firstPage);
  const [activePage, setActivePage] = useState(1);

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

  return (
    <div className="font-montserrat gap-y-1 flex flex-col">
      {currentPage.map((product) => (
        <div
          key={product.id}
          className=" my-12 mx-3 md:hidden flex flex-col items-center font-montserrat "
        >
          <a href="#">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-lg w-[239px] h-[427px] object-cover"
            />
          </a>
          <div className="p-4 flex flex-col items-center gap-y-2">
            <h5 className="text-lg font-bold">{product.name}</h5>
            <p className="text-gray-500">{product.name2}</p>
            <div className="flex justify-center gap-x-3 mt-4">
              <span className="text-xl text-[#BDBDBD] font-bold">
                {product.price1}
              </span>
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
      <div className="hidden md:flex md:justify-center md:items-center md:mx-auto md:flex-wrap md:w-[57%] w-[60%]">
        {products.map((product) => (
          <div
            key={product.id}
            className=" my-12 mx-3 hidden md:flex md:flex-col md:items-center font-montserrat "
          >
            <a href="#">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-lg w-[239px] h-[427px] md:w-[239px] md:h-[300px] object-cover"
              />
            </a>
            <div className="p-4 flex flex-col items-center gap-y-2">
              <h5 className="text-lg font-bold">{product.name}</h5>
              <p className="text-gray-500">{product.name2}</p>
              <div className="flex justify-center gap-x-3 mt-4">
                <span className="text-xl text-[#BDBDBD] font-bold">
                  {product.price1}
                </span>
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
    </div>
  );
}

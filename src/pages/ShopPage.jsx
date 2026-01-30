import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopProductsThunk } from "../store/thunks/fetchProductsThunk";
import ShopCategories from "../layout/ShopCategories";
import ShopProducts from "../layout/ShopProducts";
import Brands from "../layout/Brands";
import { useParams } from "react-router-dom";

export default function ShopPage() {
  const [view, setView] = useState("grid");
  const [desktopPiece, setDesktopPiece] = useState("");
  const [mobilePiece, setMobilePiece] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 25;
  const [sort, setSort] = useState({ key: "price", order: "asc" });
  const [filter, setFilter] = useState();
  const total = useSelector((state) => state.shopProducts.total);
  const loading = useSelector((state) => state.shopProducts.loading);
  const allProducts = useSelector((state) => state.shopProducts.shopProducts);
  const { gender, categoryName, categoryId } = useParams();
  const dispatch = useDispatch();
  const totalPages = Math.ceil((total || 0) / pageSize);

  useEffect(() => {
    dispatch(fetchShopProductsThunk(categoryId));
  }, [categoryId, page, pageSize, dispatch]);

  return (
    <div className="flex flex-col items-center font-montserrat justify-center">
      <section className="md:flex text-center md:justify-between md:w-[70%]">
        <h1 className="font-bold text-[24px] text-[#252B42]">Shop</h1>

        <div className="items-center flex gap-x-4 mt-2 mb-10">
          <a href="/" className="font-bold text-[#252B42]">
            Home
          </a>
          <span className="text-[#BDBDBD] gap-x-4 flex">
            {">"} <span className="text-[#BDBDBD] font-bold">Shop</span>
          </span>
        </div>
      </section>
      <ShopCategories />
      <section className="my-10 flex flex-col gap-y-6 items-center justify-center md:flex md:flex-row md:justify-between md:w-[55%]">
        <div className="font-bold text-[14px] text-[#737373] flex">
          Toplam ürün: <span className="mx-1 text-[#23A6F0]">{total}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <span className="font-bold text-[14px] text-[#737373]">Views:</span>
          <select
            value={`${sort.key}-${sort.order}`}
            onChange={(e) => {
              const [key, order] = e.target.value.split("-");
              setSort({ key, order });
            }}
            className="rounded-[5px] text-[14px] text-[#737373] border border-[#DDDDDD] bg-[#F9F9F9] w-[180px] h-[50px]"
          >
            <option value="price-asc">Fiyat (Artan)</option>
            <option value="price-desc">Fiyat (Azalan)</option>
            <option value="rating-asc">Puan (Artan)</option>
            <option value="rating-desc">Puan (Azalan)</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-[5px] text-[14px] text-[#737373] border border-[#DDDDDD] bg-[#F9F9F9] h-[50px] w-[160px] px-3 focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
            style={{ minWidth: "100px", maxWidth: "200px" }}
          />
          <button className="rounded-[5px] text-[14px] w-[94px] h-[50px] font-bold text-[#FFFFFF] bg-[#23A6F0]">
            Filter
          </button>
        </div>
      </section>
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <svg
            className="animate-spin h-10 w-10 text-[#23A6F0]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <ShopProducts
            desktopPiece={desktopPiece}
            setDesktopPiece={setDesktopPiece}
            mobilePiece={mobilePiece}
            setMobilePiece={setMobilePiece}
            sort={sort}
            filter={filter}
            products={allProducts}
            page={page}
            pageSize={pageSize}
          />
          <div className="flex justify-center items-center gap-2 my-8">
            <button
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-bold disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="mx-2">
              {page} / {totalPages}
            </span>
            <button
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-bold disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
      <Brands />
    </div>
  );
}

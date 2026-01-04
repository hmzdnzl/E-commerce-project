import React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";

// Kategori id'den kategori adı eşlemesi
const categoryMap = {
  1: "tisort",
  2: "pantolon",
  3: "ayakkabi",
  4: "elbise",
  // ...diğerleri
};

export default function ProductCard({ product, categoryName, gender }) {
  if (!product) return null;
  // Eksikse mapping ve varsayılan değer kullan
  const mappedCategoryName = categoryName && categoryName !== '' ? categoryName : categoryMap[product.category_id] || 'unknown';
  const mappedGender = gender && gender !== '' ? gender : 'unisex';
  const productNameSlug = slugify(product.name || "");
  const url = `/shop/${mappedGender}/${mappedCategoryName}/${product.category_id}/${productNameSlug}/${product.id}`;

  return (
    <Link
      to={url}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 cursor-pointer group border border-gray-100 hover:border-blue-400"
      style={{ textDecoration: 'none', minWidth: 220, maxWidth: 320, margin: '0 auto' }}
      onClick={() => {
        console.log('Tıklanan ürün:', {
          id: product.id,
          name: product.name,
          category_id: product.category_id,
          category_name: mappedCategoryName,
          gender: mappedGender
        });
      }}
    >
      <div className="relative overflow-hidden rounded-t-lg" style={{ height: 260 }}>
        <img
          src={product.images && product.images[0] ? product.images[0].url : ''}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col items-center gap-y-2">
        <h2 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 text-center">
          {product.name}
        </h2>
        <p className="text-xs text-gray-500 mb-2 text-center line-clamp-2">{product.description?.slice(0, 60)}...</p>
        <div className="flex items-center justify-between w-full mt-2">
          <span className="text-blue-600 font-bold text-base">{product.price} ₺</span>
          <span className="text-xs text-gray-400">Stok: {product.stock}</span>
        </div>
      </div>
      <style>{`
        .group:hover {
          box-shadow: 0 8px 32px 0 rgba(35,166,240,0.15);
          border-color: #23A6F0;
        }
        .group { cursor: pointer; }
      `}</style>
    </Link>
  );
}

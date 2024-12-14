import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const ProductLayout = () => {
  const containerRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 2 : 3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  return (
    <div className="w-full overflow-hidden px-3 lg:px-6 mb-10">
      <h2 className="text-2xl font-bold text-white text-left border-b-2 border-gray-500 py-2 lg:text-left mb-6">
        Hot Deals
      </h2>
      <div className="flex flex-col lg:items-center gap-6 mb-6">
        <div className="flex flex-col text-center">
          <p className="text-3xl font-semibold text-white mb-4">Sale</p>
          <p className="text-3xl font-bold text-white">Up to 60% Off</p>
          <Link to="/shop"
            className="text-sm underline text-white hover:text-gray-300 mt-10"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
      <div
  ref={containerRef}
  className="flex gap-4 overflow-x-scroll scrollbar-hide px-6"
  style={{ scrollBehavior: "smooth", width: "100%" }}
>
  {products.map((product) => (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="group flex-shrink-0 w-[calc(100%-1rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(100%/3-1rem)] text-white rounded-lg shadow-lg relative"
    >
      <div className="relative border-2 border-gray-500 rounded-md overflow-hidden">
        <img
          src={Array.isArray(product.src) ? product.src[0] : product.src}
          alt={product.name}
          className="w-full object-cover h-72 sm:h-64 lg:h-[100%]"
        />
        {Array.isArray(product.src) && product.src[1] && (
          <img
            src={product.src[1]}
            alt={`${product.name} Hover`}
            className="absolute inset-0 w-full object-cover h-72 sm:h-64 lg:h-[100%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </div>
      <div className="p-2 text-left font-semibold">
        <h3 className="text-sm truncate">{product.name}</h3>
        <p className="text-sm">{product.price}</p>
      </div>
    </Link>
  ))}
</div>

    </div>
  );
};

export default ProductLayout;



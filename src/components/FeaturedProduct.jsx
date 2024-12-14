import React from "react";
import products from "../data/featured"; 
import { Link } from "react-router-dom";


const FeaturedProductLayout = () => {
  return (
    <section className="text-white py-5">
      <div className="px-4 md:px-6 lg:px-10">
        <h2 className="text-2xl text-left font-bold mb-6 border-b-2 border-gray-300 py-2">Featured Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <Link
            to={`/product/${product.id}`}
              key={product.id}
              className="group text-white  overflow-hidden shadow-md"
            >
              <div className="relative border-2 border-gray-500 rounded-md overflow-hidden">
              <img
                src={Array.isArray(product.src) ? product.src[0] : product.src}
                alt={product.name}
                className="lg:w-full lg:h-[25rem] lg:object-cover"
              />
              {Array.isArray(product.src) && product.src[1] && (
                <img
                  src={product.src[1]}
                  alt={`${product.name} Hover`}
                  className="absolute inset-0 lg:w-full lg:h-[25rem] lg:object-cover rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  
                />
              )}
              </div>
              <div className="py-2">
              <h3 className="lg:px-2 text-sm lg:text-md lg:font-semibold">{product.name}</h3>
              <p className="lg:px-2 text-sm lg:text-md lg:font-semibold mb-2">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductLayout;

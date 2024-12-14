import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import featured from "../data/featured";
import products from "../data/products";

const Details = () => {
  const { id } = useParams();
  const allProducts = [...products, ...featured];
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.src.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.src.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-[5rem] lg:py-[6rem] px-4 lg:px-10 flex flex-col lg:flex-row gap-4 items-center lg:items-start">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      {/* Thumbnail Section */}
      <div className="flex lg:flex-col lg:items-center items-center justify-center space-y-2 lg:space-y-6 space-x-3 lg:space-x-0">
        {product.src.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-20 h-20 lg:w-[6rem] lg:h-[6rem] flex items-center justify-center border-2 rounded-md ${
              currentImageIndex === index
                ? "border-gray-300"
                : "border-gray-600"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
              onClick={() => setCurrentImageIndex(index)}
            />
          </div>
        ))}
      </div>

      {/* Main Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative border-2 border-gray-500 rounded-md">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-white p-2 rounded-full"
            onClick={handlePrevImage}
          >
            {"<"}
          </button>
          <img
            src={product.src[currentImageIndex]}
            alt={`Product ${currentImageIndex + 1}`}
            className="w-96 h-96 object-cover lg:w-[38rem] lg:h-[38rem]"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-white p-2 rounded-full"
            onClick={handleNextImage}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex-1 space-y-3 text-left">
        <nav className="text-sm text-white mb-6">
          <Link to="/" className="hover:font-semibold hover:underline">
            HOME
          </Link>{" "}
          /{" "}
          <Link to="/shop" className="hover:font-semibold hover:underline">
            THE SHOP
          </Link>
        </nav>
        <h1 className="text-3xl text-white font-semibold">{product.name}</h1>
        <div className="flex justify-start space-x-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm text-gray-400">
            {product.reviews}+ reviews
          </span>
        </div>
        <p className="text-xl font-semibold text-white">{product.price}</p>
        <p className="text-sm text-gray-400">{product.description}</p>

        <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2">
          <div className="flex items-center text-black bg-white w-fit overflow-hidden">
            <button
              className="p-4"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-12 p-2 text-center"
            />
            <button
              className="p-4"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <Link
            to="https://s.shopee.co.id/BC7H4aOG2"
            className="w-[60%] text-white bg-black border-2 border-gray-500 py-4 hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all"
          >
            <button className="w-full h-full flex items-center justify-center">
              SHOP
            </button>
          </Link>
        </div>

        <div className="pt-4 text-sm text-gray-400 space-y-2">
          <p>CATEGORIES: {product.categories.join(", ")}</p>
          <p>TAGS: {product.tags.join(", ")}</p>
          <p>WEIGHT: {product.weight}</p>
          <p>DIMENSION: {product.dimension}</p>
          <p>SIZE: {product.sizes.join(", ")}</p>
          <p>COLOR: {product.color}</p>
          <p>STORAGE: {product.storage}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

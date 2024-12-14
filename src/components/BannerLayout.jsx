import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";

// Data banner
const banners = [
  {
    id: 1,
    title: "Abstract T-shirt",
    subtitle: "STARTING AT 150K",
    buttonText: "Shop Now",
    imgSrc: banner1,
  },
  {
    id: 2,
    title: "People Wear",
    subtitle: "STARTING AT 150K",
    buttonText: "Shop Now",
    imgSrc: banner2,
  },
];

const Banner = () => {
  return (
    <section className="text-white py-5 mb-10">
      <div className=" px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative text-white rounded-xl overflow-hidden"
            >
              <img
                src={banner.imgSrc}
                alt={banner.title}
                className="w-full h-[30rem] object-cover lg:w-full lg:h-[50rem] lg:object-cover "
              />

              <div className="absolute top-4 left-4 bg-red-600 text-white text-center text-sm font-semibold lg:text- flgont-md w-[7rem] h-[7rem] flex items-center justify-center rounded-full">
                {banner.subtitle}
              </div>

              <div className="absolute bottom-6 left-0 right-0 text-center lg:bottom-5">
                <h3 className="text-lg font-bold">{banner.title}</h3>
                <Link to="/shop">
                <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded shadow hover:scale-110 transition-all duration-200 ease-in-out">
                  {banner.buttonText}
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import StickerLayout from "../components/StickerLayout";
import ProductCarousel from "../components/ProductLayout";
import Banner from "../components/BannerLayout";
import FeaturedProductLayout from "../components/FeaturedProduct";
import Footer from "../components/FooterLayout";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      src: model1,
      text: "01",
      title: "Skateboarding",
      subtitle: "T-shirt",
    },
    {
      id: 2,
      src: model2,
      text: "02",
      title: "Ideasplace on RED",
      subtitle: "T-shirt",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section className=" relative text-white py-[6rem] lg:py-0 flex items-center justify-center overflow-hidden">
        {/* bg */}
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>

        <div className="relative w-full px-4 lg:px-10 lg:flex lg:justify-between lg:items-center">
          <div className="space-y-4 text-left ">
            <p className="text_dash text-uppercase text-2xl font-semibold">
              New Article
            </p>
            <motion.h2
              key={currentIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-6xl font-semibold leading-tight"
            >
              {slides[currentIndex].title} <br />
              <span className="text-white font-bold">
                {slides[currentIndex].subtitle}
              </span>
            </motion.h2>
            <button className="mt-4 py-3 text-white underline font-semibold">
              Shop Now
            </button>
          </div>

          <div className="relative bottom-[10rem] left-10 w-full h-[300px] lg:w-1/2 lg:bottom-0  lg:h-[900px] items-center justify-end">
            {slides.map((slide, index) => (
              <motion.img
                key={slide.id}
                src={slide.src}
                alt={`Model ${slide.id}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 50,
                }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 h-[35rem] w-[30rem] lg:h-[45rem] lg:w-[30rem] mx-auto ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="lg:px-10 absolute bottom-20 left-10 flex items-center space-x-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`text-lg font-md ${
                index === currentIndex ? "text-white" : "text-gray-500"
              }`}
            >
              {slide.text}
              {" | "}
            </div>
          ))}
        </div>
      </section>

      <div>
        <StickerLayout />
        <ProductCarousel />
        <Banner />
        <FeaturedProductLayout />
        <Footer />
      </div>
    </>
  );
};

export default Hero;

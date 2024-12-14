import React, { useRef } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { motion } from "framer-motion";

import sticker1 from "../assets/sticker/sticker1.png"
import sticker2 from "../assets/sticker/sticker2.png"
import sticker3 from "../assets/sticker/sticker3.png"
import sticker4 from "../assets/sticker/sticker4.png"
import sticker5 from "../assets/sticker/sticker5.png"
import sticker6 from "../assets/sticker/sticker6.png"
import sticker7 from "../assets/sticker/sticker7.png"
import sticker8 from "../assets/sticker/sticker8.png"
import sticker9 from "../assets/sticker/sticker9.png"
import sticker11 from "../assets/sticker/sticker11.png"
import sticker13 from "../assets/sticker/sticker13.png"
import sticker14 from "../assets/sticker/sticker14.png"
import sticker15 from "../assets/sticker/sticker15.png"
import sticker16 from "../assets/sticker/sticker16.png"
import sticker17 from "../assets/sticker/sticker17.png"
import sticker18 from "../assets/sticker/sticker18.png"
import sticker19 from "../assets/sticker/sticker19.png"
import sticker20 from "../assets/sticker/sticker20.png"

const stickers = [

  { id: 4, name: "Box Red Sticker", type: "Sticker", src: sticker4 },
  { id: 5, name: "Mask Pink Yellow Sticker", type: "Sticker", src: sticker5 },
  { id: 6, name: "Head Dog Blue Sticker", type: "Sticker", src: sticker6 },
  { id: 7, name: "Mask yellow Blue Sticker", type: "Sticker", src: sticker7 },
  { id: 8, name: "Box Blue Sticker", src: sticker8 },
  { id: 9, name: "Box Pink Sticker", type: "Sticker", src: sticker9 },
  { id: 11, name: "Mask Red Black Sticker", type: "Sticker", src: sticker11 },
  { id: 13, name: "Mask Black Cream Sticker", type: "Sticker", src: sticker13 },
  { id: 14, name: "Ghost Pink Sticker", type: "Sticker", src: sticker14 },
  { id: 15, name: "Mask Black Sticker", type: "Sticker", src: sticker15 },
  { id: 16, name: "Head Dog Red Sticker", type: "Sticker", src: sticker16 },
  { id: 17, name: "Ghost Orange Sticker", type: "Sticker", src: sticker17 },
  { id: 18, name: "Ghost Blue Sticker", type: "Sticker", src: sticker18 },
  { id: 19, name: "Head Dog Black Sticker", type: "Sticker", src: sticker19 },
  { id: 20, name: "USA to Isoneday Sticker", type: "Sticker", src: sticker20 },
  { id: 1, name: "Bombom Car Sticker", type: "Sticker", src:sticker1 },
  { id: 2, name: "Collaboration Sticker", type: "Sticker", src:sticker2 },
  { id: 3, name: "Blaba sticker", type: "Sticker", src: sticker3 },
];

const StickerLayout = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300; 
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative text-white py-10 lg:px-10">
      <h2 className="text-2xl text-left font-bold mb-6 border-b border-white px-4 py-2 lg:px-0 lg:text-left">
        You Might Like
      </h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-white px-5 z-10 hidden md:block hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <GrPrevious />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide gap-4 px-4 lg:px-0"
        >
          {stickers.map((sticker) => (
            <motion.div
              key={sticker.id}
              className="flex-shrink-0 w-[50%] lg:w-[25%] bg-blur text-center pt-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={sticker.src}
                alt={sticker.name}
                className="w-full h-auto mb-4 object-contain"
              />
              <h3 className="text-sm font-semibold">{sticker.name}</h3>
              <p className="text-sm font-semibold mb-4">{sticker.type}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-5 z-10 hidden md:block hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <GrNext />
        </button>
      </div>
    </section>
  );
};

export default StickerLayout;

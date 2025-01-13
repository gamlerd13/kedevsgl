"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BrandCarouselProps {
  brands: string[];
  direction: "left" | "right";
}

const BrandCarousel: React.FC<BrandCarouselProps> = ({ brands, direction }) => {
  const containerVariants = {
    animate: {
      x: direction === "left" ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex overflow-hidden my-8 ">
      <motion.div
        className="flex whitespace-nowrap justify-center items-center"
        variants={containerVariants}
        animate="animate"
      >
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex-none px-8 py-4 text-2xl font-bold text-gray-800 bg-white bg-opacity-80 mx-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg w-[200px] h-[100px] flex items-center justify-center"
          >
            <Image src={brand} width={100} height={50} alt={brand} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandCarousel;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

const categories = [
  { 
    title: "Firearms", 
    imgAlt: "Collection of various firearms", 
    imgDesc: "Several handguns and rifles displayed on a wall rack", 
    imgSrc: "/Home/1.jpg",
    link: "/category/firearms"
  },
  { 
    title: "Ammunition", 
    imgAlt: "Boxes of different caliber ammunition", 
    imgDesc: "Rows of rifle and pistol ammunition cartridges", 
    imgSrc: "/Home/2.jpg",
    link: "/category/ammunition"
  },
  { 
    title: "Accessories", 
    imgAlt: "Tactical firearm accessories like scopes and grips", 
    imgDesc: "An assortment of scopes, lights, and grips for firearms", 
    imgSrc: "/Home/3.jpg",
    link: "/category/accessories"
  },
];

function CategoryCard({ title, imgAlt, imgDesc, imgSrc, link }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateY = ((x / width) - 0.5) * 10;
    const rotateX = ((y / height) - 0.5) * -10;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.a
      href={link}
      className="relative w-full h-80 sm:h-96 overflow-hidden group rounded-[5px]"
      style={{ transformStyle: "preserve-3d", zIndex: 2 }}
      variants={{ hover: { scale: 1.05, zIndex: 5 } }}
      whileHover="hover"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      aria-label={`View ${title} category`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        variants={{ hover: { scale: 1.1 } }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <img
          className="w-full h-full object-cover rounded-[5px]"
          alt={imgAlt}
          src={imgSrc}
        />
      </motion.div>

      {/* Overlays */}
      <div className="overlay-dark transition-opacity duration-300 group-hover:opacity-55"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[5px]"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h3
          className="text-white font-black tracking-normal uppercase text-4xl italic sm:text-4xl headline"
          style={{ fontFamily: "Kanit, sans-serif" }}
          variants={{ hover: { letterSpacing: "0.2em" } }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
      </div>
    </motion.a>
  );
}

export default function Categories() {
  return (
    <motion.section
      id="categories"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            title={cat.title}
            imgAlt={cat.imgAlt}
            imgDesc={cat.imgDesc}
            imgSrc={cat.imgSrc}
            link={cat.link}
          />
        ))}
      </div>
    </motion.section>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const brands = [
  { bg: "/home-page-brands/Winchester/background.jpg", logo: "/home-page-brands/Winchester/logo.png" },
  { bg: "/home-page-brands/knight_armament/top-guns.jpg", logo: "/home-page-brands/knight_armament/logo.png" },
  { bg: "/home-page-brands/Remington/top-guns.jpg", logo: "/home-page-brands/Remington/logo.png" },
  { bg: "/home-page-brands/sig_sauer/top-guns.webp", logo: "/home-page-brands/sig_sauer/logo.png" },
  { bg: "/home-page-brands/Smith_Wesson/top-guns.jpg", logo: "/home-page-brands/Smith_Wesson/logo.png" },
  { bg: "/home-page-brands/strrum_Ruger/top-guns.jpg", logo: "/home-page-brands/strrum_Ruger/logo.png" },
  { bg: "/brands/holosun-bg.jpg", logo: "/brands/holosun-logo.png" },
  { bg: "/brands/nighthawk-bg.jpg", logo: "/brands/nighthawk-logo.png" },
];

export default function BrandSlider() {
  return (
    <section
      className="relative py-32 sm:py-36"
      style={{
        backgroundImage: `url('/background/background.jpg')`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="relative z-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // Ensure autoplay continues despite interaction
          }}
          speed={6000} // Maintains the slow continuous scroll
          loop={true}
          freeMode={true}
          freeModeMomentum={false} // Prevents momentum from stopping the scroll
          grabCursor={true}
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <a
                href="/products"
                className="group block w-full aspect-[1/1] relative rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url(${brand.bg})`,
                }}
              >
                {/* Overlay with hover effect */}
                <div className="absolute inset-0 z-[1] bg-black/45 group-hover:bg-[#ec5f00]/70 transition-all duration-300"></div>

                {/* Logo */}
                <img
                  src={brand.logo}
                  alt="Brand Logo"
                  className="relative z-[2] max-h-[85%] max-w-[85%] object-contain m-auto"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
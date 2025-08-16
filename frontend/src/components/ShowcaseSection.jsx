import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const brands = [
  { bg: "/home-page-brands/images/smith.jpg", logo: "/home-page-brands/logos/smith.png" },
{ bg: "/home-page-brands/images/glock.jpg", logo: "/home-page-brands/logos/glock.png" },
{ bg: "/home-page-brands/images/colt.webp", logo: "/home-page-brands/logos/colt.png" },
{ bg: "/home-page-brands/images/heckler.jpg", logo: "/home-page-brands/logos/hk.png" },
{ bg: "/home-page-brands/images/beretta.jpg", logo: "/home-page-brands/logos/beretta.png" },
{ bg: "/home-page-brands/images/ruger.jpg", logo: "/home-page-brands/logos/ruger.png" },
{ bg: "/home-page-brands/images/sig.jpg", logo: "/home-page-brands/logos/sig.png" },
{ bg: "/home-page-brands/images/mossberg.jpg", logo: "/home-page-brands/logos/mossberg.png" },
{ bg: "/home-page-brands/images/savage.jpg", logo: "/home-page-brands/logos/savage.png" },
{ bg: "/home-page-brands/images/browning.webp", logo: "/home-page-brands/logos/browning.png" },
{ bg: "/home-page-brands/images/taurus.jpg", logo: "/home-page-brands/logos/taurus.png" },
{ bg: "/home-page-brands/images/benelli.jpg", logo: "/home-page-brands/logos/benelli.png" },
{ bg: "/home-page-brands/images/remington.webp", logo: "/home-page-brands/logos/remingtom.png" },
{ bg: "/home-page-brands/images/winchester.jpg", logo: "/home-page-brands/logos/winchester.png" },
{ bg: "/home-page-brands/images/fn.jpg", logo: "/home-page-brands/logos/fn.png" },
{ bg: "/home-page-brands/images/knight.jpg", logo: "/home-page-brands/logos/knight.png" },
{ bg: "/home-page-brands/images/barrett.webp", logo: "/home-page-brands/logos/barrett.png" },
{ bg: "/home-page-brands/images/spring.jpg", logo: "/home-page-brands/logos/spring.png" },

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
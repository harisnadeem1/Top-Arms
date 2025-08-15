import React from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Autoplay } from 'swiper/modules';
    import { motion } from 'framer-motion';
    import { toast } from '@/components/ui/use-toast';

    const brands = [
      { name: 'OTIS', logoAlt: 'OTIS Technology logo', bgAlt: 'OTIS gun cleaning kit', logoDesc: 'OTIS Technology logo in white', bgDesc: 'Gun cleaning tools on a dark surface' },
      { name: 'SME', logoAlt: 'SME logo', bgAlt: 'SME hearing protection', logoDesc: 'SME logo stylized in white', bgDesc: 'Electronic hearing protection muffs' },
      { name: 'Winchester', logoAlt: 'Winchester logo', bgAlt: 'Winchester ammunition box', logoDesc: 'Winchester classic red W logo', bgDesc: 'Box of Winchester rifle cartridges' },
      { name: 'BPS', logoAlt: 'BPS Knives logo', bgAlt: 'BPS tactical knife', logoDesc: 'BPS Knives logo text', bgDesc: 'A fixed-blade tactical knife with sheath' },
      { name: 'Cabot Guns', logoAlt: 'Cabot Guns logo', bgAlt: 'Cabot Guns custom 1911', logoDesc: 'Cabot Guns shield logo', bgDesc: 'A high-end custom 1911 pistol' },
      { name: 'Glock', logoAlt: 'Glock Perfection logo', bgAlt: 'Glock pistol silhouette', logoDesc: 'Glock Perfection logo in white', bgDesc: 'The silhouette of a Glock handgun' },
      { name: 'Sig Sauer', logoAlt: 'Sig Sauer logo', bgAlt: 'Sig Sauer rifle', logoDesc: 'Sig Sauer brand name logo', bgDesc: 'A modern Sig Sauer MCX rifle' },
    ];

    const notImplemented = () =>
      toast({
        title: "Heads up!",
        description:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });

    export default function BrandCarousel() {
      return (
        <motion.section 
          id="brands" 
          className="py-16 sm:py-24 bg-black/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container-max text-center mb-8">
            <p className="eyebrow">Elite Partners</p>
            <h2 className="headline text-3xl sm:text-4xl">Trusted Brands We Carry</h2>
          </div>
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={1000}
              freeMode={true}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
              className="!px-4"
            >
              {brands.map((brand) => (
                <SwiperSlide key={brand.name} className="!w-auto">
                  <motion.button
                    onClick={notImplemented}
                    className="relative w-48 h-24 rounded-lg overflow-hidden glass card-hover flex items-center justify-center group"
                    whileHover={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }}
                  >
                    <img  class="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" alt={brand.bgAlt} src="https://images.unsplash.com/photo-1649015931204-15a3c789e6ea" />
                    <div className="overlay-dark opacity-30 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative w-28 h-12">
                      <img  class="w-full h-full object-contain" alt={brand.logoAlt} src="https://images.unsplash.com/photo-1649015931204-15a3c789e6ea" />
                    </div>
                  </motion.button>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[hsl(var(--background))] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[hsl(var(--background))] to-transparent z-10 pointer-events-none"></div>
          </div>
        </motion.section>
      );
    }
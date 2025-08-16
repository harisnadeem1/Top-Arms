import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mouse } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    headline: 'We thrive through passion to be your number one dealer',
    subheading: 'Offering you top quality firearms and ammunition brands to fulfill all your needs and beyond',
    imgAlt: 'Close-up of a high-end rifle on a dark background',
    imgDesc: 'A sleek, modern rifle with tactical attachments',
    imgSrc: '/hero-slider/top-slide-2.jpg',
    buttons: [
      { text: 'Read More About Us', link: '/about' },
      { text: 'Speak To Us', link: '/contact' }
    ]
  },
  {
    headline: 'The Elite Standard in Tactical Gear',
    subheading: 'From optics to suppressors, equip yourself with accessories trusted by professionals worldwide.',
    imgAlt: 'A collection of tactical firearm accessories',
    imgDesc: 'An array of scopes, grips, and magazines on a textured surface',
    imgSrc: '/hero-slider/top-slide-1.jpg',
    buttons: [
      { text: 'Explore Collection', link: '/products' }
    ]
  },
  {
    headline: 'A Legacy of Power and Reliability',
    subheading: 'Choose from a heritage of firearms known for their robust design and unwavering performance in any condition.',
    imgAlt: 'A classic, powerful handgun resting on a wooden table',
    imgDesc: 'A polished, heavy-caliber pistol with custom grips',
    imgSrc: '/hero-slider/top-slide-3.jpg',
    buttons: [
      { text: 'View Firearms', link: '/category/firearms' }
    ]
  },
];

const notImplemented = () =>
  toast({
    title: "Heads up!",
    description:
      "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
  });

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative h-[70vh] lg:h-screen min-h-[500px] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0">
              <img className="w-full h-full object-cover" alt={slide.imgAlt} src={slide.imgSrc} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
            <div className="relative h-full flex items-center justify-center text-center section-padding">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
                className="max-w-4xl"
              >
                <h1 className="headline text-3xl sm:text-6xl lg:text-5xl leading-tight text-shadow-lg font-kanit italic" style={{ fontFamily: 'Kanit, sans-serif' }}>
                  {slide.headline}
                </h1>
                <p className="subtext mt-5 max-w-2xl mx-auto text-shadow font-kanit" style={{ fontFamily: 'Kanit, sans-serif' }}>
                  {slide.subheading}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {slide.buttons.map((btn, i) => (
                    <a key={i} href={btn.link}>
                      <Button
                        size="lg"
                        className={
                          i === 1
                            ? "uppercase italic tracking-wider font-extrabold border-2 text-white border-[#ec5f00] bg-transparent hover:bg-[#ec5f00] hover:text-white transition-all shadow-2xl font-kanit"
                            : "uppercase italic tracking-wider font-extrabold text-white orange-gradient hover:brightness-110 transition-all shadow-2xl shadow-orange-900/40 font-kanit"
                        }
                        style={{ fontFamily: 'Kanit, sans-serif' }}
                      >
                        {btn.text}
                      </Button>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev !left-4 md:!left-8 text-white"></div>
      <div className="swiper-button-next !right-4 md:!right-8 text-white"></div>

      <button
        onClick={() => scrollToId('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Mouse className="h-10 w-10 opacity-70 hover:opacity-100 transition-opacity" />
        </motion.div>
      </button>
    </section>
  );
}

import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import FeatureBanner from "@/components/FeatureBanner";
import { Link } from "react-router-dom";


const notImplemented = () =>
  toast({
    title: 'Heads up!',
    description:
      "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
  });




const productsData = [
  {
    id: 'smith-wesson',
    name: 'Smith & Wesson',
    logo: '/about/Logos/smith.png',
    logoAlt: 'Smith & Wesson logo',
    description:
      'Founded in 1852, Smith & Wesson is one of America’s most iconic firearms manufacturers. The company is best known for its high-quality revolvers, semi-automatic pistols, and rifles. Trusted by law enforcement, military, and civilian shooters, S&W firearms combine durability, accuracy, and classic American design.',
    features: ['Revolvers (Model 29, .44 Magnum)', 'M&P Pistols', 'AR-15 Rifles'],
    sliderImages: [
      { src: '/Products/smith/smith-1.jpg', alt: 'Smith & Wesson revolver' },
      { src: '/Products/smith/smith-2.jpg', alt: 'Smith & Wesson pistol' },
      { src: '/Products/smith/smith-3.jpg', alt: 'Smith & Wesson pistol' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'glock',
    name: 'Glock',
    logo: '/about/Logos/glock.png',
    logoAlt: 'Glock logo',
    description:
      'Glock, founded in Austria in 1963, revolutionized the firearms industry with its polymer-framed pistols. Known for their simplicity, reliability, and lightweight design, Glock pistols are used by countless police and military forces worldwide. They are also a top choice among civilian shooters.',
    features: ['Polymer Pistols', 'Safe Action Trigger System', '9mm Compact Series (G19)'],
    sliderImages: [
      { src: '/Products/glock/glock-4.jpg', alt: 'Glock compact handgun' },
      { src: '/Products/glock/glock-1.jpg', alt: 'Glock pistol' },
      { src: '/Products/glock/glock-3.jpg', alt: 'Glock compact handgun' },
      { src: '/Products/glock/glock-2.jpg', alt: 'Glock compact handgun' },


    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'colt-defense',
    name: 'Colt Defense',
    logo: '/about/Logos/colt.png',
    logoAlt: 'Colt Defense logo',
    description:
      'Colt is a legendary American firearms company, founded in 1855, and famous for iconic designs that shaped history. The Colt M1911 pistol and Colt AR-15/M4 rifles remain industry standards, trusted by military and law enforcement for over a century.',
    features: ['M1911 Pistol', 'AR-15/M4 Carbines', 'Single Action Army Revolver'],
    sliderImages: [
      { src: '/Products/colt/colt-1.jpg', alt: 'Colt M1911 pistol' },
      { src: '/Products/colt/colt-2.webp', alt: 'Colt AR rifle' },
      { src: '/Products/colt/colt-3.jpg', alt: 'Colt AR rifle' },
      { src: '/Products/colt/colt-4.webp', alt: 'Colt AR rifle' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'heckler-koch',
    name: 'Heckler & Koch (HK)',
    logo: '/about/Logos/hk.png',
    logoAlt: 'Heckler & Koch logo',
    description:
      'Founded in Germany, Heckler & Koch is synonymous with precision engineering and advanced military weapons. HK is famous for developing legendary firearms like the MP5 submachine gun, the G36 assault rifle, and modern pistols like the VP9, all known for reliability under the toughest conditions.',
    features: ['MP5 Submachine Gun', 'G36 Rifle', 'VP9 Pistol'],
    sliderImages: [
      { src: '/Products/heckler/heckler-1.avif', alt: 'Heckler & Koch MP5' },
      { src: '/Products/heckler/heckler-2.webp', alt: 'Heckler & Koch G36' },
      { src: '/Products/heckler/heckler-3.avif', alt: 'Heckler & Koch G36' },
      { src: '/Products/heckler/heckler-4.avif', alt: 'Heckler & Koch G36' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'beretta',
    name: 'Beretta',
    logo: '/about/Logos/beretta.png',
    logoAlt: 'Beretta logo',
    description:
      'Beretta, founded in 1526 in Italy, is one of the world’s oldest and most respected firearms companies. Its pistols and shotguns are widely used by military, law enforcement, and sports shooters. The Beretta 92 pistol became legendary as the U.S. military’s M9 sidearm.',
    features: ['92FS/M9 Pistol', 'Over-and-Under Shotguns', 'Sporting Rifles'],
    sliderImages: [
      { src: '/Products/beretta/beretta-1.webp', alt: 'Beretta M9 pistol' },
      { src: '/Products/beretta/beretta-2.webp', alt: 'Beretta shotgun' },
      { src: '/Products/beretta/beretta-3.webp', alt: 'Beretta shotgun' },
      { src: '/Products/beretta/beretta-4.jpeg', alt: 'Beretta shotgun' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'ruger',
    name: 'Ruger (Sturm, Ruger & Co.)',
    logo: '/about/Logos/ruger.png',
    logoAlt: 'Ruger logo',
    description:
      'Sturm, Ruger & Co., founded in 1949, is a leading American manufacturer known for affordable, rugged, and reliable firearms. Ruger produces a wide range including pistols, revolvers, rifles, and the popular 10/22 rimfire rifle.',
    features: ['Ruger 10/22 Rifle', 'GP100 Revolver', 'AR-556 Rifle'],
    sliderImages: [
      { src: '/Products/strum/strum-1.jpg', alt: 'Ruger 10/22' },
      { src: '/Products/strum/strum-2.jpg', alt: 'Ruger revolver' },
    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'sig-sauer',
    name: 'SIG Sauer',
    logo: '/about/Logos/sig.png',
    logoAlt: 'SIG Sauer logo',
    description:
      'SIG Sauer is a world-class firearms brand with Swiss-German roots, widely used by armed forces, law enforcement, and civilian shooters. Its P226, P320 (M17), and MCX rifles are known for accuracy, innovation, and reliability.',
    features: ['P320/M17 Pistol', 'P226 Pistol', 'MCX Rifle'],
    sliderImages: [
      { src: '/Products/sig/sig-1.jpg', alt: 'SIG Sauer P320' },
      { src: '/Products/sig/sig-2.avif', alt: 'SIG Sauer MCX' },
      { src: '/Products/sig/sig-3.jpg', alt: 'SIG Sauer MCX' },
      { src: '/Products/sig/sig-4.png', alt: 'SIG Sauer MCX' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'mossberg',
    name: 'Mossberg',
    logo: '/about/Logos/mossberg.png',
    logoAlt: 'Mossberg logo',
    description:
      'Founded in 1919, Mossberg is one of the most respected shotgun manufacturers in the world. Best known for the Mossberg 500 series, these shotguns are widely used for hunting, sport shooting, and law enforcement.',
    features: ['Mossberg 500 Shotgun', 'Maverick 88', 'Hunting Rifles'],
    sliderImages: [
      { src: '/Products/mossberg/mossberg-1.webp', alt: 'Mossberg shotgun' },
      { src: '/Products/mossberg/mossberg-2.png', alt: 'Mossberg hunting gun' },
      { src: '/Products/mossberg/mossberg-3.webp', alt: 'Mossberg hunting gun' },
      { src: '/Products/mossberg/mossberg-4.jpg', alt: 'Mossberg hunting gun' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'savage-arms',
    name: 'Savage Arms',
    logo: '/about/Logos/savage.png',
    logoAlt: 'Savage Arms logo',
    description:
      'Savage Arms, founded in 1894, is a U.S.-based firearms company renowned for its accurate and affordable bolt-action rifles. Their innovations like the AccuTrigger system have made Savage rifles popular with hunters and precision shooters.',
    features: ['Bolt-Action Rifles', 'AccuTrigger Technology', 'Hunting Rifles'],
    sliderImages: [
      { src: '/Products/savage/savage-1.jpg', alt: 'Savage bolt-action rifle' },
      { src: '/Products/savage/savage-2.jpg', alt: 'Savage hunting rifle' },
      { src: '/Products/savage/savage-3.jpg', alt: 'Savage hunting rifle' },
      { src: '/Products/savage/savage-4.jpg', alt: 'Savage hunting rifle' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'browning',
    name: 'Browning',
    logo: '/about/Logos/browning.png',
    logoAlt: 'Browning logo',
    description:
      'Browning, founded by legendary designer John Moses Browning, has a long history of firearm innovation. Known for shotguns, hunting rifles, and pistols, Browning combines craftsmanship with performance for professionals and enthusiasts.',
    features: ['A5 Shotgun', 'BAR Rifle', 'Hi-Power Pistol'],
    sliderImages: [
      { src: '/Products/browning/browning-1.jpg', alt: 'Browning shotgun' },
      { src: '/Products/browning/browning-2.webp', alt: 'Browning Hi-Power' },
      { src: '/Products/browning/browning-3.webp', alt: 'Browning Hi-Power' },
      { src: '/Products/browning/browning-4.jpg', alt: 'Browning Hi-Power' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'taurus',
    name: 'Taurus',
    logo: '/about/Logos/taurus.png',
    logoAlt: 'Taurus logo',
    description:
      'Based in Brazil, Taurus produces a wide variety of affordable handguns and revolvers. Known for value, Taurus firearms are popular with civilian shooters and self-defense users worldwide.',
    features: ['Judge Revolver (.410/.45)', 'G Series Pistols', 'Revolvers'],
    sliderImages: [
      { src: '/Products/taurus/taurus-1.jpg', alt: 'Taurus revolver' },
      { src: '/Products/taurus/taurus-2.webp', alt: 'Taurus pistol' },
      { src: '/Products/taurus/taurus-3.webp', alt: 'Taurus pistol' },
      { src: '/Products/taurus/taurus-4.jpg', alt: 'Taurus pistol' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'benelli',
    name: 'Benelli',
    logo: '/about/Logos/benelli.png',
    logoAlt: 'Benelli logo',
    description:
      'Benelli, an Italian manufacturer, is world-famous for its premium semi-automatic shotguns. Used in hunting, competitive shooting, and tactical operations, Benelli firearms are valued for their reliability and advanced Inertia Driven system.',
    features: ['M4 Tactical Shotgun', 'Super Black Eagle', 'Inertia Driven System'],
    sliderImages: [
      { src: '/Products/benelli/benelli-1.jpg', alt: 'Benelli M4' },
      { src: '/Products/benelli/benelli-2.jpg', alt: 'Benelli hunting shotgun' },
      { src: '/Products/benelli/benelli-3.jpg', alt: 'Benelli hunting shotgun' },
      { src: '/Products/benelli/benelli-4.jpg', alt: 'Benelli hunting shotgun' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'remington',
    name: 'Remington Outdoor Company',
    logo: '/about/Logos/Remington.png',
    logoAlt: 'Remington logo',
    description:
      'Remington, founded in 1816, is one of America’s oldest gun makers and ammunition producers. Known for its Model 700 rifles, shotguns, and ammunition, Remington has served generations of hunters, shooters, and armed forces.',
    features: ['Model 700 Rifle', '870 Shotgun', 'High-Quality Ammunition'],
    sliderImages: [
      { src: '/Products/remington/remington-1.jpg', alt: 'Remington Model 700' },
      { src: '/Products/remington/remington-2.jpg', alt: 'Remington 870 shotgun' },
      { src: '/Products/remington/remington-3.jpg', alt: 'Remington 870 shotgun' },
      { src: '/Products/remington/remington-4.jpg', alt: 'Remington 870 shotgun' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'winchester',
    name: 'Winchester Repeating Arms',
    logo: '/about/Logos/winchester.png',
    logoAlt: 'Winchester logo',
    description:
      'Founded in 1866, Winchester is one of the most famous names in firearms and ammunition history. Known for its lever-action rifles like the Model 1873 and high-quality ammunition, Winchester remains a symbol of innovation and tradition.',
    features: ['Model 1873 Lever-Action', 'Super-X Ammunition', 'Shotguns'],
    sliderImages: [
      { src: '/Products/winchester/winchester-1.jpg', alt: 'Winchester lever-action rifle' },
      { src: '/Products/winchester/winchester-2.jpg', alt: 'Winchester ammunition' },
      { src: '/Products/winchester/winchester-3.jpg', alt: 'Winchester ammunition' },
      { src: '/Products/winchester/winchester-4.jpg', alt: 'Winchester ammunition' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'fn-herstal',
    name: 'FN Herstal',
    logo: '/about/Logos/herstal.png',
    logoAlt: 'FN Herstal logo',
    description:
      'FN Herstal, based in Belgium, is known for military-grade firearms used worldwide. Its famous designs include the FN SCAR rifle, the FN P90 submachine gun, and the unique FN Five-seveN pistol.',
    features: ['FN SCAR Rifle', 'Five-seveN Pistol', 'P90 Submachine Gun'],
    sliderImages: [
      { src: '/Products/fn/fn-1.jpg', alt: 'FN SCAR rifle' },
      { src: '/Products/fn/fn-2.webp', alt: 'FN Five-seveN pistol' },
      { src: '/Products/fn/fn-3.jpg', alt: 'FN Five-seveN pistol' },
      { src: '/Products/fn/fn-4.jpg', alt: 'FN Five-seveN pistol' },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'knights-armament',
    name: "Knight's Armament",
    logo: '/about/Logos/knight.png',
    logoAlt: "Knight's Armament logo",
    description:
      'Knight’s Armament Company (KAC) is a U.S. defense contractor specializing in military rifles and accessories. KAC is best known for developing the M110 Semi-Automatic Sniper System (SASS) and advanced suppressors.',
    features: ['M110 SASS', 'SR-25 Rifle', 'Suppressors'],
    sliderImages: [
      { src: '/Products/knight/knight-1.jpg', alt: "Knight's Armament SR-25" },
      { src: '/Products/knight/knight-2.jpg', alt: "Knight's Armament suppressor" },
      { src: '/Products/knight/knight-3.jpg', alt: "Knight's Armament suppressor" },
      { src: '/Products/knight/knight-4.jpg', alt: "Knight's Armament suppressor" },

    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'barrett',
    name: 'Barrett Firearms',
    logo: '/about/Logos/barrett.png',
    logoAlt: 'Barrett logo',
    description:
      'Founded in 1982, Barrett Firearms is famous worldwide for its powerful long-range rifles. The Barrett M82 (.50 BMG) revolutionized anti-material sniper rifles and remains the gold standard for heavy-caliber precision shooting.',
    features: ['M82 .50 BMG Rifle', 'MRAD Sniper Rifle', 'Long-Range Precision'],
    sliderImages: [
      { src: '/Products/barett/barett-1.jpg', alt: 'Barrett M82 sniper rifle' },
    ],
    featureBg: '/background/background.jpg',
  },
  {
    id: 'springfield',
    name: 'Springfield Armory',
    logo: '/about/Logos/spring.png',
    logoAlt: 'Springfield Armory logo',
    description:
      'Springfield Armory, originally founded in 1777 and revived as a commercial brand, is known for both classic rifles and modern pistols. Its M1A rifles and XD/ Hellcat pistols are highly regarded by professionals and enthusiasts.',
    features: ['M1A Rifle', 'XD-S Pistol Series', 'Hellcat Micro-Compact'],
    sliderImages: [
      { src: '/Products/spring/spring-1.jpg', alt: 'Springfield M1A rifle' },
      { src: '/Products/spring/spring-2.jpg', alt: 'Springfield M1A rifle' },
      { src: '/Products/spring/spring-3.jpg', alt: 'Springfield M1A rifle' },

    ],
    featureBg: '/background/background.jpg',
  },
];



// const productsData = [
//     {
//         id: 'winchester',
//         name: 'Winchester',
//         logo: '/about/Logos/winchester.png',
//         logoAlt: 'Winchester logo',
//         description:
//             'Winchester is one of the oldest ammunition brands in the world as it is well recognised for its consistent production of high-quality ammunition, earning the company’s reputation for quality. Besides that, the legendary Winchester is also known for its affordability of its shotguns and rifles, as well as some of the best performing ammunition in the world.',
//         features: ['9MM', '12 Gauge'],
//         sliderImages: [
//             { src: '/Products/winchester/winchester-1.jpg', alt: 'BPS knife in a leather sheath' },
//             { src: '/Products/winchester/winchester-2.jpg', alt: 'BPS knife in a leather sheath' },
//             { src: '/Products/winchester/winchester-3.jpg', alt: 'BPS knife in a leather sheath' },
//             { src: '/Products/winchester/winchester-4.jpg', alt: 'BPS knife in a leather sheath' },


//         ],
//         featureBg: '/background/background.jpg',
//     },
//     {
//         id: 'cabot_guns',
//         name: 'Cabot Guns',
//         logo: 'https://images.unsplash.com/photo-1649015931204-15a3c789e6ea',
//         logoAlt: 'Cabot Guns logo',
//         description:
//             'The pinnacle of American craftsmanship. Cabot Guns creates heirloom-quality 1911 pistols from solid blocks of steel and exotic materials.',
//         features: ['100% Billet Steel', 'Aerospace Tolerances', 'Mirror-Image Sets'],
//         sliderImages: [
//             { src: '/Home/1.jpg', alt: 'BPS knife in a leather sheath' },
//         ],
//         featureBg: '/background/background.jpg',
//     },
//     {
//         id: 'winchester',
//         name: 'Winchester',
//         logo: 'https://images.unsplash.com/photo-1649015931204-15a3c789e6ea',
//         logoAlt: 'Winchester logo',
//         description:
//             'An American legend, Winchester has been a leader in firearms and ammunition innovation for over 150 years, powering marksmen and hunters.',
//         features: ['Proven Ammunition', 'Iconic Lever-Actions', 'Modern Rifles'],
//         sliderImages: [
//             { src: '/Home/1.jpg', alt: 'BPS knife in a leather sheath' },
//         ],
//         featureBg: '/background/background.jpg',
//     },
// ];

const ProductBrandSection = ({ data, isFirst }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // start below (20%), end at slight overlap (-5%)
  const y = useTransform(scrollYProgress, [0, 1], ['30%', '-40%']);

  return (
    <div
      id={data.id}
      ref={ref}
      className={`relative ${isFirst ? '' : 'pt-16'}`} // ✅ only add top padding for non-first
    >
      {/* Slider */}
      <div className="relative h-[60vh] lg:h-[80vh] bg-black z-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          {data.sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Feature card (scrolls up) */}
      <div className="relative h-[65vh] flex items-center justify-center z-10">
        <motion.div
          style={{ y }}
          className="w-[95%] md:w-[85%] h-[120%] relative rounded-lg overflow-hidden shadow-2xl"
        >
          <div
            style={{ backgroundImage: `url(${data.featureBg})` }}
            className="w-full h-full bg-repeat bg-auto"
          >
            <div className="absolute inset-0 p-10 md:p-12 lg:p-20 flex flex-col justify-between">

              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                {/* Logo + description */}
                <div className="flex-1 text-left">
                  <img
                    src={data.logo}
                    alt={data.logoAlt}
                    className="w-[50%] md:w-auto h-auto md:h-40 mb-4"
                  />
                  <p className="subtext text-white/80 text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed max-w-full md:max-w-3xl">
                    {data.description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="w-auto text-left self-start md:self-center">
                  {data.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-extrabold text-white/90 text-xl md:text-2xl italic tracking-wide md:tracking-wider uppercase mb-2 border-b-2 border-primary pb-1 w-fit"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="text-center mt-6 md:mt-0">
                <Link
  to="/contact"
  className="uppercase tracking-wider font-extrabold text-white orange-gradient hover:brightness-110 transition-all shadow-lg shadow-orange-900/30 inline-flex items-center justify-center px-6 py-3 rounded-lg"
>
  Contact Us for {data.name}
</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>



    </div>
  );
};

export default function ProductsPage() {
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Our Products | Top Arms</title>
        <meta
          name="description"
          content="Explore our curated collection of elite firearms, ammunition, and accessories from the world's leading brands."
        />
        <meta property="og:title" content="Our Products | Top Arms" />
        <meta
          property="og:description"
          content="Discover premium products from BPS, Cabot Guns, Winchester, and more."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[500px] flex items-center justify-center text-white bg-[url('/background/background.jpg')] bg-repeat bg-auto">
        <motion.div
          className="relative z-10 text-center section-padding max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="headline text-5xl sm:text-5xl">Our Products</h1>
          <p className="subtext mt-6 text-white text-xl  w-[80%] md:w-[70%] mx-auto">


            We are always eager to bring to you all the best possible brands of firearms, ammunition, security equipment, protective gears and armour, hunting equipment and all related accessories. Our experienced and well-trained team is passionate about what we do and most importantly, we are always ready to provide our best advise and asistance to all our valued customers.
          </p>
        </motion.div>
      </section>

      {/* Product Sections */}
      {productsData.map((data, index) => (
        <ProductBrandSection key={data.id} data={data} isFirst={index === 0} />
      ))}
      <FeatureBanner />
    </div>
  );
}

import React, { useRef, useState, useEffect } from 'react';
    import { Helmet } from 'react-helmet';
    import { motion, useScroll, useTransform } from 'framer-motion';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Autoplay } from 'swiper/modules';
    import { Button } from '@/components/ui/button';
    import { toast } from '@/components/ui/use-toast';
    import { cn } from '@/lib/utils';
    
    const notImplemented = () =>
      toast({
        title: "Heads up!",
        description:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });

    const productsData = [
      {
        id: "bps",
        name: "BPS Knives",
        logo: "https://images.unsplash.com/photo-1649015931204-15a3c789e6ea",
        logoAlt: "BPS Knives logo",
        description: "Rugged, reliable fixed-blade knives engineered for the outdoors and tactical applications. Built to withstand the toughest conditions.",
        features: ["High-Carbon Steel", "Full Tang Construction", "Scandi Grind"],
        sliderImages: [
            { src: "https://images.unsplash.com/photo-1579274214594-5399557f9175", alt: "BPS knife in a leather sheath" },
            { src: "https://images.unsplash.com/photo-1614921381335-58525b0e00f9", alt: "Close-up of a BPS knife handle" },
            { src: "https://images.unsplash.com/photo-1590406838334-a692c3541a31", alt: "BPS knife being used for woodcraft" },
        ],
        featureBg: "https://images.unsplash.com/photo-1543362905-f48358e5361b"
      },
      {
        id: "cabot_guns",
        name: "Cabot Guns",
        logo: "https://images.unsplash.com/photo-1649015931204-15a3c789e6ea",
        logoAlt: "Cabot Guns logo",
        description: "The pinnacle of American craftsmanship. Cabot Guns creates heirloom-quality 1911 pistols from solid blocks of steel and exotic materials.",
        features: ["100% Billet Steel", "Aerospace Tolerances", "Mirror-Image Sets"],
        sliderImages: [
            { src: "https://images.unsplash.com/photo-1613612999238-f173f7690b6a", alt: "A stunning custom Cabot Guns 1911" },
            { src: "https://images.unsplash.com/photo-1614741151383-7933f67469a3", alt: "Detail shot of the slide serrations on a Cabot pistol" },
            { src: "https://images.unsplash.com/photo-1565962013994-8f0606363a09", alt: "Two Cabot Guns pistols in a display case" },
        ],
        featureBg: "https://images.unsplash.com/photo-1607968541812-793a8a8b1632"
      },
      {
        id: "winchester",
        name: "Winchester",
        logo: "https://images.unsplash.com/photo-1649015931204-15a3c789e6ea",
        logoAlt: "Winchester logo",
        description: "An American legend, Winchester has been a leader in firearms and ammunition innovation for over 150 years, powering marksmen and hunters.",
        features: ["Proven Ammunition", "Iconic Lever-Actions", "Modern Rifles"],
        sliderImages: [
            { src: "https://images.unsplash.com/photo-1632435498301-315f67a2d4f2", alt: "A box of Winchester ammunition" },
            { src: "https://images.unsplash.com/photo-1628770889234-9d6636a092b3", alt: "A classic Winchester lever-action rifle" },
            { src: "https://images.unsplash.com/photo-1604245749176-764e5c4d6c48", alt: "A modern Winchester bolt-action rifle" },
        ],
        featureBg: "https://images.unsplash.com/photo-1563206767-5b18f218e8de"
      }
    ];

    const ProductBrandSection = ({ data }) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "end start"]
        });

        const y = useTransform(scrollYProgress, [0.5, 1], ["0%", "-30%"]);

        return (
            <div id={data.id} ref={ref} className="relative pt-16">
                <div className="relative h-[60vh] lg:h-[80vh] bg-black">
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
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="relative h-[50vh] flex items-center justify-center -mt-[15%]">
                    <motion.div style={{ y }} className="w-[90%] md:w-[80%] h-[120%] relative rounded-lg overflow-hidden shadow-2xl">
                        <img src={data.featureBg} alt={`${data.name} background`} className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div>
                                    <img src={data.logo} alt={data.logoAlt} className="h-12 md:h-16 w-auto mb-4"/>
                                    <p className="subtext text-white/80 max-w-sm">{data.description}</p>
                                </div>
                                <ul className="hidden md:block text-right">
                                    {data.features.map(feature => (
                                        <li key={feature} className="font-bold text-white/90 text-sm tracking-wider uppercase mb-2 border-b-2 border-primary pb-1">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                <Button onClick={notImplemented} size="lg" className="uppercase tracking-wider font-extrabold text-white orange-gradient hover:brightness-110 transition-all shadow-lg shadow-orange-900/30">
                                    About {data.name}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    };

    const StickyNav = ({ brands, activeSection }) => {
        const [isSticky, setSticky] = useState(false);
        const ref = useRef(null);

        useEffect(() => {
            const handleScroll = () => {
                if (ref.current) {
                    setSticky(ref.current.getBoundingClientRect().top <= 80); // Adjust based on header height
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const scrollToId = (id) => {
            const el = document.getElementById(id);
            if (el) {
                const yOffset = -150; // Adjust for sticky nav height
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };

        return (
             <div ref={ref} className={cn("transition-all duration-300 z-50", isSticky ? 'fixed top-[80px] left-0 right-0 glass-scrolled' : 'relative bg-transparent')}>
                <div className="container-max">
                     <div className="flex justify-center items-center py-3 overflow-x-auto no-scrollbar">
                        {brands.map((brand) => (
                            <button
                                key={brand.id}
                                onClick={() => scrollToId(brand.id)}
                                className={cn(
                                    "px-4 py-2 text-sm font-bold tracking-wider uppercase whitespace-nowrap text-white/70 hover:text-white transition-colors",
                                    activeSection === brand.id && "text-primary"
                                )}
                            >
                                {brand.name}
                            </button>
                        ))}
                    </div>
                </div>
             </div>
        );
    };


    export default function ProductsPage() {
      const [activeSection, setActiveSection] = useState("");
      const sectionRefs = useRef([]);

      useEffect(() => {
        sectionRefs.current = productsData.map(data => ({
            id: data.id,
            ref: document.getElementById(data.id)
        }));

        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
                }
              });
            },
            { rootMargin: "-40% 0px -60% 0px" } // trigger when section is in the middle of viewport
        );
        
        sectionRefs.current.forEach(section => {
            if(section.ref) observer.observe(section.ref);
        });

        return () => {
            sectionRefs.current.forEach(section => {
                if(section.ref) observer.unobserve(section.ref);
            });
        };
      }, []);

      return (
        <>
          <Helmet>
            <title>Our Products | Top Arms</title>
            <meta name="description" content="Explore our curated collection of elite firearms, ammunition, and accessories from the world's leading brands." />
            <meta property="og:title" content="Our Products | Top Arms" />
            <meta property="og:description" content="Discover premium products from BPS, Cabot Guns, Winchester, and more." />
          </Helmet>
          
          <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white bg-black">
              <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1571715438843-750d52b41295" alt="A collection of firearms displayed on a wall" className="w-full h-full object-cover opacity-30"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
              <motion.div 
                className="relative z-10 text-center section-padding max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                  <h1 className="headline text-5xl sm:text-7xl">Our Products</h1>
                  <p className="subtext mt-6 text-lg">
                      We offer a meticulously curated selection of firearms, ammunition, and accessories from the world's most reputable manufacturers. Each product is chosen for its superior quality, performance, and reliability.
                  </p>
              </motion.div>
          </section>

          <StickyNav brands={productsData} activeSection={activeSection} />

          <div className="bg-background">
             {productsData.map(data => (
                <ProductBrandSection key={data.id} data={data}/>
             ))}
          </div>
        </>
      );
    }
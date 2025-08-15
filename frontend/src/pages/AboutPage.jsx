import React, { useRef } from 'react';
    import { Helmet } from 'react-helmet';
    import { motion, useScroll, useTransform } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { toast } from '@/components/ui/use-toast';
    import { ArrowRight } from 'lucide-react';

    const notImplemented = () =>
      toast({
        title: "Heads up!",
        description:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });

    const ParallaxSection = ({ bgImage, bgAlt, heading, children }) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "end start"],
        });
        const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

        return (
            <section ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
                <motion.div className="absolute inset-0 z-0" style={{ y }}>
                    <img  class="w-full h-full object-cover" alt={bgAlt} src="https://images.unsplash.com/photo-1484435186664-27df3f1b94cf" />
                    <div className="overlay-dark"></div>
                </motion.div>
                <div className="relative z-10 container-max text-center">
                    <h2 className="headline text-4xl sm:text-6xl text-white">{heading}</h2>
                    <div className="h-1 w-24 bg-primary mx-auto mt-4 mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {children}
                    </div>
                </div>
            </section>
        );
    };

    const CategoryColumn = ({ logoSrc, logoAlt, description }) => (
        <div className="flex flex-col items-center text-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
            <img  class="h-16 w-auto mb-6 object-contain" alt={logoAlt} src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            <p className="subtext mb-6 flex-grow">{description}</p>
            <Button onClick={notImplemented} variant="outline" className="w-full bg-transparent border-primary text-primary hover:bg-primary/10">
                Learn More
            </Button>
        </div>
    );

    export default function AboutPage() {
      return (
        <>
          <Helmet>
            <title>About Us | Top Arms</title>
            <meta name="description" content="Learn about Top Arms, our mission to provide elite firearms and ammunition, and our commitment to quality and service." />
            <meta property="og:title" content="About Us | Top Arms" />
            <meta property="og:description" content="Discover the story and values behind Top Arms, the leading distributor of premium tactical gear." />
          </Helmet>
          
          <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white">
              <div className="absolute inset-0">
                  <img  class="w-full h-full object-cover" alt="Workshop with precision tools and firearms parts" src="https://images.unsplash.com/photo-1688127305710-eb23272a4315" />
                  <div className="absolute inset-0 bg-black/60"></div>
              </div>
              <motion.div 
                className="relative z-10 text-center section-padding max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                  <h1 className="headline text-5xl sm:text-7xl">About Us</h1>
                  <p className="subtext mt-6 text-lg">
                      Founded on the principles of precision, reliability, and unwavering commitment, Top Arms has become the most trusted name in premium firearms and ammunition distribution. We bridge the gap between elite manufacturers and discerning professionals.
                  </p>
                  <div className="w-32 h-px bg-primary mx-auto my-8"></div>
                  <p className="subtext">
                      Our mission is to equip our partners with the market's finest, most technologically advanced tactical solutions, backed by expert support and a seamless supply chain.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
                      <Button onClick={notImplemented} size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary/10">
                          Check Out Our Locations
                      </Button>
                      <Button onClick={notImplemented} size="lg" className="text-white orange-gradient hover:brightness-110">
                          Speak To Us <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                  </div>
              </motion.div>
          </section>

          <ParallaxSection 
            bgImage="firearms-bg.jpg"
            bgAlt="A dynamic shot of a modern sports rifle"
            heading="Firearms"
          >
              <CategoryColumn 
                  logoSrc="logo1.png"
                  logoAlt="Sig Sauer Logo"
                  description="A global leader in firearm manufacturing, offering unmatched reliability and performance for military, law enforcement, and commercial markets."
              />
              <CategoryColumn 
                  logoSrc="logo2.png"
                  logoAlt="Glock Logo"
                  description="Renowned for its iconic pistols that have set the standard for safety, simplicity, and 'Perfection' in handguns worldwide."
              />
              <CategoryColumn 
                  logoSrc="logo3.png"
                  logoAlt="Daniel Defense Logo"
                  description="Maker of the world's finest AR-15 style rifles, parts, and accessories, engineered to the highest standards of precision and durability."
              />
          </ParallaxSection>

          <ParallaxSection 
            bgImage="ammo-bg.jpg"
            bgAlt="Close-up of high-caliber ammunition rounds"
            heading="Ammunition"
          >
              <CategoryColumn 
                  logoSrc="logo4.png"
                  logoAlt="Federal Premium Ammunition Logo"
                  description="Delivering cutting-edge technology and consistent performance across a wide range of hunting, self-defense, and competition ammunition."
              />
              <CategoryColumn 
                  logoSrc="logo5.png"
                  logoAlt="Hornady Logo"
                  description="An industry leader in bullet and ammunition manufacturing, known for its 'Accurate, Deadly, Dependable' products."
              />
              <CategoryColumn 
                  logoSrc="logo6.png"
                  logoAlt="Speer Logo"
                  description="Pioneers in law enforcement and self-defense ammunition, creators of the legendary Gold Dot line trusted by agencies globally."
              />
          </ParallaxSection>
        </>
      );
    }
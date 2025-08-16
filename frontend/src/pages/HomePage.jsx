import React from 'react';
    import { motion } from "framer-motion";
    import Hero from "@/components/Hero";
    import BrandCarousel from "@/components/BrandCarousel";
    import FeatureBanner from "@/components/FeatureBanner";
    import Categories from "@/components/Categories";
    import ShowCase from "@/components/ShowcaseSection";


    const sections = [
      // { id: "brands", component: BrandCarousel },
      { id: "categories", component: Categories },

      { id: "feature", component: FeatureBanner },
    ];
    
    const AboutSection = React.memo(function AboutSection() {
      return (
        <motion.section
          id="about"
          className="section-padding py-16 sm:py-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="eyebrow">Who We Are</p>
                <h2 className="headline text-3xl sm:text-4xl">Committed to Excellence</h2>
                <p className="subtext mt-4">
                  We partner with leading manufacturers to supply certified, premium-grade
                  firearms, ammunition, and tactical accessories—delivered with rigorous
                  quality assurance and dependable support.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative h-40 rounded-lg overflow-hidden glass"
                  whileHover={{ scale: 1.03 }}
                >
                  <img  class="w-full h-full object-cover" alt="Warehouse operations" src="https://images.unsplash.com/photo-1700820520020-916d6ffb399a" loading="lazy" />
                </motion.div>
                <motion.div
                  className="relative h-40 rounded-lg overflow-hidden glass"
                  whileHover={{ scale: 1.03 }}
                >
                  <img  class="w-full h-full object-cover" alt="Compliance and safety" src="https://images.unsplash.com/photo-1692198685479-1f65c2561568" loading="lazy" />
                </motion.div>
                <motion.div
                  className="relative h-40 rounded-lg overflow-hidden glass col-span-2"
                  whileHover={{ scale: 1.03 }}
                >
                  <img  class="w-full h-full object-cover" alt="Customer service team" src="https://images.unsplash.com/photo-1678790118729-631da1a112ef" loading="lazy" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      );
    });

    export default function HomePage() {
      return (
        <>
          <Hero />
          <ShowCase />
          {/* <AboutSection /> */}
          {sections.map(({ id, component: Component }) => (
            <Component key={id} />
          ))}
        </>
      );
    }
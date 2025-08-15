import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';

    const categoryData = [
        { 
          title: "Firearms", 
          link: "/category/firearms", 
          imgSrc: "https://images.unsplash.com/photo-1595872018818-97555653a011",
          imgAlt: "Collection of various firearms",
        },
        { 
          title: "Ammunition", 
          link: "/category/ammunition", 
          imgSrc: "https://images.unsplash.com/photo-1579758414502-3dc59461158a",
          imgAlt: "Boxes of different caliber ammunition",
        },
        { 
          title: "Accessories", 
          link: "/category/accessories", 
          imgSrc: "https://images.unsplash.com/photo-1621243767839-a1b89e5f5f33",
          imgAlt: "Tactical firearm accessories like scopes and grips",
        },
    ];

    const CategoryCard = React.memo(function CategoryCard({ title, link, imgSrc, imgAlt }) {
      return (
        <motion.div
          className="relative w-full h-80 sm:h-96 overflow-hidden group"
          whileHover="hover"
        >
          <Link to={link} className="absolute inset-0 z-10" aria-label={`View ${title} category`}>
            <span className="sr-only">View {title}</span>
          </Link>
          <motion.div
            className="absolute inset-0"
            variants={{ hover: { scale: 1.1 } }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" loading="lazy"/>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <motion.h3 
              className="text-white font-black tracking-widest uppercase text-2xl sm:text-4xl headline"
            >
              {title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
                <Button asChild tabIndex={-1} className="orange-gradient text-white font-bold uppercase tracking-wider">
                  <Link to={link}>View All</Link>
                </Button>
            </motion.div>
          </div>
        </motion.div>
      );
    });

    export default function Categories() {
      return (
        <motion.section 
          id="categories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {categoryData.map((cat) => (
                <CategoryCard key={cat.title} {...cat} />
            ))}
          </div>
        </motion.section>
      );
    }
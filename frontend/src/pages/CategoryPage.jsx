import React, { useState, useEffect } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import productData from '@/data/products.json';

    const categoryDetails = {
      firearms: {
        title: "Firearms",
        tagline: "Explore our premium range of tactical firearms.",
        heroImage: "https://images.unsplash.com/photo-1563206767-5b18f218e8de",
      },
      ammunition: {
        title: "Ammunition",
        tagline: "High-performance ammunition for every application.",
        heroImage: "https://images.unsplash.com/photo-1608722137617-a77d1d293f0b",
      },
      accessories: {
        title: "Accessories",
        tagline: "Upgrade your gear with our elite accessories.",
        heroImage: "https://images.unsplash.com/photo-1623954388548-17b539c381c8",
      }
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 },
      },
    };

    const ProductCard = React.memo(function ProductCard({ product, categoryName }) {
      return (
        <motion.div variants={itemVariants} className="group relative rounded-lg overflow-hidden border border-white/10">
          <Link to={`/category/${categoryName}/${product.id}`} className="absolute inset-0 z-10">
            <span className="sr-only">View {product.name}</span>
          </Link>
          <div className="overflow-hidden h-72">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute inset-0 flex items-end p-6">
            <h3 className="text-white font-bold text-xl tracking-wide">{product.name}</h3>
          </div>
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-primary font-bold uppercase tracking-widest">View Details</span>
          </div>
        </motion.div>
      );
    });

    export default function CategoryPage() {
      const { categoryName } = useParams();
      const [products, setProducts] = useState([]);
      const [visibleCount, setVisibleCount] = useState(9);
      const category = categoryDetails[categoryName];

      useEffect(() => {
        if (productData[categoryName]) {
          setProducts(productData[categoryName]);
        }
      }, [categoryName]);

      if (!category) {
        return <div className="h-screen flex items-center justify-center text-white">Category not found.</div>;
      }

      const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 9);
      };

      return (
        <>
          <Helmet>
            <title>{category.title} | Top Arms</title>
            <meta name="description" content={category.tagline} />
            <meta property="og:title" content={`${category.title} | Top Arms`} />
            <meta property="og:description" content={category.tagline} />
          </Helmet>

          <div className="bg-background text-white">
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
              <div className="absolute inset-0">
                <img src={category.heroImage} alt={`${category.title} category`} className="w-full h-full object-cover" />
                <div className="overlay-dark"></div>
              </div>
              <motion.div
                className="relative z-10 section-padding"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="headline text-5xl sm:text-7xl">{category.title}</h1>
                <p className="subtext mt-4 text-lg">{category.tagline}</p>
              </motion.div>
            </section>

            <section className="section-padding py-16 sm:py-24">
              <motion.div
                className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {products.slice(0, visibleCount).map(p => (
                  <ProductCard key={p.id} product={p} categoryName={categoryName} />
                ))}
              </motion.div>
              {visibleCount < products.length && (
                <div className="text-center mt-16">
                  <Button onClick={loadMore} size="lg" className="orange-gradient text-white font-bold uppercase tracking-wider">Load More</Button>
                </div>
              )}
            </section>
          </div>
        </>
      );
    }
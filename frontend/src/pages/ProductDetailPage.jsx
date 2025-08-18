import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productData from '@/data/products.json';
    import FeatureBanner from "@/components/FeatureBanner";


const ProductCard = React.memo(function ProductCard({ product, categoryName }) {
  return (
    <div className="group relative rounded-lg overflow-hidden border border-white/10">
      <Link to={`/category/${categoryName}/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {product.name}</span>
      </Link>
      <div className="overflow-hidden h-52 sm:h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white font-bold text-base sm:text-lg">{product.name}</h3>
      </div>
    </div>
  );
});

export default function ProductDetailPage() {
  const { categoryName, productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (productData[categoryName]) {
      const foundProduct = productData[categoryName].find((p) => p.id === productId);
      setProduct(foundProduct);

      if (foundProduct) {
        const related = productData[categoryName].filter((p) => p.id !== productId).slice(0, 3);
        setRelatedProducts(related);
      }
    }
  }, [categoryName, productId]);

  if (!product) {
    return <div className="h-screen flex items-center justify-center text-white">Product not found.</div>;
  }

  const handleRequestQuote = () => {
    navigate('/contact', { state: { subject: `Quote for: Products` } });
  };

  return (
    <>
      <Helmet>
        <title>{`${product.name} | Top Arms`}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} | Top Arms`} />
        <meta property="og:description" content={product.description} />
      </Helmet>

      <div className="bg-background text-white pt-20 sm:pt-24">
        {/* Product Detail */}
        <section className="section-padding py-10 sm:py-16 lg:py-24">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  className="rounded-lg overflow-hidden"
                >
                  {product.gallery.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={imgSrc}
                        alt={`${product.name} gallery image ${index + 1}`}
                        className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

              {/* Info */}
              <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <p className="text-primary font-bold uppercase tracking-wider text-sm sm:text-base">
    Category: {categoryName}
  </p>
  <h1 className="headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
    {product.name}
  </h1>
  <p className="subtext mt-4 text-base sm:text-lg max-w-xl">{product.description}</p>

  <h2 className="font-bold text-xl sm:text-2xl text-white mt-8 mb-4">Key Advantages</h2>
  <ul className="space-y-3">
    {product.advantages.map((adv) => (
      <li key={adv} className="flex items-center">
        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
        <span>{adv}</span>
      </li>
    ))}
  </ul>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 mt-8">
    <Button
      onClick={handleRequestQuote}
      size="lg"
      className="orange-gradient text-white font-bold italic uppercase tracking-wider"
    >
      Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
    </Button>

    <Button
      asChild
      variant="outline"
      size="lg"
      className="border-2 border-orange-500 text-white italic font-bold uppercase tracking-wider hover:bg-orange-500/20"
    >
      <a href="/products">Learn More About Brands</a>
    </Button>
  </div>
</motion.div>

            </div>
          </div>
        </section>

        {/* Related Products */}
       <section
  className="section-padding py-10 sm:py-16 lg:py-24 bg-[url('/background/background.jpg')] bg-repeat bg-center"
>
  <div className="container-max">
    <h2 className="headline text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8">
      Related Products
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {relatedProducts.map((p) => (
        <ProductCard key={p.id} product={p} categoryName={categoryName} />
      ))}
    </div>
  </div>
</section>

                    <FeatureBanner/>
        
      </div>
    </>
  );
}

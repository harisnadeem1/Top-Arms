import React, { Suspense, lazy } from "react";
    import { Helmet } from "react-helmet";
    import { Routes, Route, useLocation } from 'react-router-dom';
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import { Toaster } from "@/components/ui/toaster";

    const HomePage = lazy(() => import('@/pages/HomePage'));
    const AboutPage = lazy(() => import('@/pages/AboutPage'));
    const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
    const ContactPage = lazy(() => import('@/pages/ContactPage'));
    const TeamPage = lazy(() => import('@/pages/TeamPage'));
    const TeamMemberPage = lazy(() => import('@/pages/TeamMemberPage'));
    const CategoryPage = lazy(() => import('@/pages/CategoryPage'));
    const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
    const ProductPage = lazy(() => import('@/pages/ProductsPageHead'));


    function ScrollToTop() {
      const { pathname } = useLocation();

      React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

      return null;
    }
    
    function LoadingFallback() {
      return (
        <div className="w-full h-screen flex items-center justify-center bg-background">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }

    export default function App() {
      return (
        <>
          <Helmet>
            <title>Top Arms | Premium Firearms & Ammunition Distributor</title>
            <meta
              name="description"
              content="Your elite distributor for high-end firearms, ammunition, and tactical gear. Discover our curated collection from the world's most trusted brands."
            />
            <meta property="og:title" content="Top Arms | Premium Firearms & Ammunition Distributor" />
            <meta
              property="og:description"
              content="Cinematic experience for the discerning firearms enthusiast. Quality, precision, and trust."
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
          </Helmet>

          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[101] bg-primary text-primary-foreground px-4 py-2 rounded-md"
          >
            Skip to Main Content
          </a>

          <Header />
          <main id="main-content">
            <ScrollToTop />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/category/:categoryName/:productId" element={<ProductDetailPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/team/:memberId" element={<TeamMemberPage />} />
                <Route path="/products" element={<ProductPage />} />

              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Toaster />
        </>
      );
    }
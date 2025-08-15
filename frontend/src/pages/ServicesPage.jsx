import React, { useRef } from 'react';
    import { Helmet } from 'react-helmet';
    import { motion, useScroll, useTransform } from 'framer-motion';

    const ParallaxSection = ({ bgImage, bgAlt, children, className = '' }) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "end start"],
        });
        const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

        return (
            <section ref={ref} className={`relative h-screen min-h-[800px] w-full overflow-hidden ${className}`}>
                <motion.div className="absolute inset-0 z-0" style={{ y }}>
                    <img src={bgImage} alt={bgAlt} className="w-full h-full object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                    {children}
                </div>
            </section>
        );
    };

    const ServiceCategory = ({ title, description }) => (
        <div className="mb-6">
            <h3 className="text-primary font-bold text-lg tracking-wider">{title}</h3>
            <div className="w-16 h-px bg-primary/50 my-2"></div>
            <p className="text-white/80">{description}</p>
        </div>
    );

    export default function ServicesPage() {
        return (
            <>
                <Helmet>
                    <title>Services & Support | Top Arms</title>
                    <meta name="description" content="Discover the comprehensive services offered by Top Arms, from retail and wholesale to gunsmithing and a state-of-the-art testing range." />
                    <meta property="og:title" content="Services & Support | Top Arms" />
                    <meta property="og:description" content="More than just a dealer. We provide expert support for retail, wholesale, and law enforcement partners." />
                </Helmet>

                <div className="bg-background">
                    <ParallaxSection
                        bgImage="https://images.unsplash.com/photo-1571715438843-750d52b41295"
                        bgAlt="Close-up of a modern firearm with intricate details"
                    >
                        <div className="container-max section-padding h-full flex items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                                <div className="flex items-center">
                                    <h1 className="headline text-6xl md:text-8xl text-white [text-shadow:_2px_2px_8px_rgba(0,0,0,0.7)]">
                                        SERVICES & SUPPORT
                                    </h1>
                                </div>
                                <div className="flex flex-col justify-center text-right">
                                    <h2 className="text-2xl md:text-3xl font-bold italic text-primary mb-4 [text-shadow:_1px_1px_4px_rgba(0,0,0,0.5)]">
                                        WE ARE MORE THAN JUST A DEALER…
                                    </h2>
                                    <p className="subtext text-white mb-8">
                                        Our philosophy extends beyond transactions. We are dedicated partners in your journey, providing unparalleled expertise, comprehensive support, and a commitment to the highest standards of service for every client.
                                    </p>
                                    <div className="grid grid-cols-2 gap-x-8 text-left">
                                        <ServiceCategory title="RETAIL" description="A curated selection of premium firearms and accessories for the discerning enthusiast." />
                                        <ServiceCategory title="SERVICES" description="Expert gunsmithing, customization, and maintenance to keep your equipment at peak performance." />
                                        <ServiceCategory title="WHOLESALE" description="Reliable distribution and logistics for our network of dealers and partners across the region." />
                                        <ServiceCategory title="LAW ENFORCEMENT" description="Specialized procurement and support for agencies requiring mission-critical equipment." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ParallaxSection>

                    <ParallaxSection
                        bgImage="https://images.unsplash.com/photo-1521464302861-ce9449538553"
                        bgAlt="Two shooters aiming down the sights of their rifles at an indoor range"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                        <div className="container-max section-padding h-full flex items-center">
                            <div className="max-w-lg">
                                <p className="eyebrow text-primary italic">UPCOMING FACILITY</p>
                                <h2 className="headline text-5xl md:text-7xl text-white my-4 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.7)]">
                                    TESTING RANGE
                                </h2>
                                <p className="subtext text-white/90">
                                    Our state-of-the-art indoor testing range is designed for both seasoned professionals and first-time shooters. With advanced ventilation, safety systems, and multiple lanes, it's the perfect environment to hone your skills, test new equipment, or simply enjoy a day at the range under expert supervision.
                                </p>
                            </div>
                        </div>
                    </ParallaxSection>

                    <ParallaxSection
                        bgImage="https://images.unsplash.com/photo-1621259199331-392add5fa65a"
                        bgAlt="A gunsmith carefully working on a firearm at a workbench"
                    >
                        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>
                        <div className="container-max section-padding h-full flex items-center justify-end">
                            <div className="max-w-lg text-right">
                                <p className="eyebrow text-primary uppercase">EXPERT GUNSMITHING</p>
                                <h2 className="headline text-5xl md:text-7xl text-white my-4 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.7)]">
                                    REPAIRS & CUSTOMIZATION
                                </h2>
                                <p className="subtext text-white/90">
                                    From routine maintenance and repairs to complete custom builds, our certified gunsmiths combine traditional craftsmanship with modern technology. We treat every firearm with meticulous care to ensure it meets and exceeds factory standards for performance and reliability.
                                </p>
                            </div>
                        </div>
                    </ParallaxSection>
                </div>
            </>
        );
    }
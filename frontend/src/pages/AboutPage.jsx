import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import FeatureBanner from "@/components/FeatureBanner";

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
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    y,
                    backgroundImage: `url('/background/background.jpg')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto", // keeps original size
                }}
            >
                {/* <div className="overlay-dark"></div> */}
            </motion.div>

            <div className="relative z-10 container-max text-center">
                <h2 className="headline text-4xl sm:text-6xl text-white">{heading}</h2>
                <div className="h-1 w-[80%] sm:w-[90%] bg-primary mx-auto mt-4 mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {children}
                </div>
            </div>
        </section>
    );
};

const CategoryColumn = ({ logoSrc, logoAlt, description }) => (
    <div className="flex flex-col items-center text-center p-6">
        <img
            className="h-36 w-auto mb-6 object-contain"
            alt={logoAlt}
            src={logoSrc}
        />
        <p
            className="text-primary text-xl font-kanit font-bold italic mb-6 flex-grow"
            style={{ fontFamily: "Kanit, sans-serif" }}
        >
            {description}
        </p>
        <Link to="/products" className="w-full">
            <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-[#ec5f00] bg-transparent text-white font-kanit font-bold italic uppercase hover:bg-[#ec5f00] hover:text-white"
                style={{ fontFamily: "Kanit, sans-serif" }}
            >
                Learn More
            </Button>
        </Link>
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

            <section className="relative min-h-[600px] lg:h-screen py-20 flex items-center justify-center text-white">



                <div className="absolute inset-0">
                    <img class="w-full h-full object-cover" alt="Workshop with precision tools and firearms parts" src="/about/hero.jpg" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <motion.div
                    className="relative z-10 text-center section-padding pt-10 max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1
                        className="headline text-5xl sm:text-5xl font-kanit italic"
                        style={{ fontFamily: 'Kanit, sans-serif' }}
                    >
                        About Us
                    </h1>

                    <p
                        className="subtext mt-6 text-white text-lg sm:text-xl font-kanit"
                        style={{ fontFamily: 'Kanit, sans-serif' }}
                    >
                        TOP ARMS SDN BHD is a licensed Malaysian company specializing in the supply of high-quality firearms, ammunition, and tactical equipment. Since our founding in 1995, we have grown from a single store in Sabah into a trusted name in the defense and security industry. Our focus has always been on delivering premium products, exceptional service, and complete compliance with all regulatory requirements.
                    </p>

                    <div className="w-40vw h-1 bg-primary mx-auto my-8"></div>


                    <p
                        className="subtext text-white text-lg sm:text-xl font-kanit"
                        style={{ fontFamily: 'Kanit, sans-serif' }}
                    >
                        With decades of experience, we have expanded our operations to serve customers across Malaysia, supplying both private and government sectors. As a fully registered supplier with the Ministry of Finance (MOF), we are authorized to participate in official tenders and contracts. Our commitment is to source and provide only the best firearms, ammunition, and related accessories from globally recognized manufacturers—ensuring reliability, safety, and performance for all our clients.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
                        {/* First button - filled orange */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
                            {/* First button - filled orange, links to /team */}
                            <Link to="/team">
                                <Button
                                    size="lg"
                                    className="bg-[#ec5f00] text-white font-kanit font-bold italic uppercase hover:brightness-110"
                                    style={{ fontFamily: 'Kanit, sans-serif' }}
                                >
                                    Learn More About Our Team
                                </Button>
                            </Link>

                            {/* Second button - outline orange, white text, links to /contact */}
                            <Link to="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-[#ec5f00] bg-transparent text-white font-kanit font-bold italic uppercase hover:bg-[#ec5f00] hover:text-white"
                                    style={{ fontFamily: 'Kanit, sans-serif' }}
                                >
                                    Speak To Us <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                </motion.div>
            </section>

            <ParallaxSection
                bgImage="/background/background.jpg"
                bgAlt="A dynamic shot of a modern sports rifle"
                heading="Firearms"
            >
                <CategoryColumn
                    logoSrc="/about/Logos/smith.png"
                    logoAlt="Smith & Wesson"
                    description="We are the Authorized Distributor of Smith & Wesson in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/glock.png"
                    logoAlt="Glock"
                    description="We are the Authorized Distributor of Glock Pistols in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/colt.png"
                    logoAlt="Colt Defense"
                    description="We are the Authorized Distributor of Colt Firearms in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/hk.png"
                    logoAlt="Heckler & Koch (HK)"
                    description="We are the Authorized Distributor of Heckler & Koch Firearms in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/beretta.png"
                    logoAlt="Beretta"
                    description="We are the Authorized Distributor of Beretta Firearms in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/ruger.png"
                    logoAlt="Ruger (Sturm, Ruger & Co.)"
                    description="We are the Authorized Distributor of Ruger Firearms in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/sig.png"
                    logoAlt="SIG Sauer"
                    description="We are the Authorized Distributor of SIG Sauer Firearms in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/mossberg.png"
                    logoAlt="Mossberg"
                    description="We are the Authorized Distributor of Mossberg Shotguns and Rifles in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/savage.png"
                    logoAlt="Savage Arms"
                    description="We are the Authorized Distributor of Savage Arms in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/browning.png"
                    logoAlt="Browning"
                    description="We are the Authorized Distributor of Browning Firearms in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/taurus.png"
                    logoAlt="Taurus"
                    description="We are the Authorized Distributor of Taurus Firearms in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/benelli.png"
                    logoAlt="Benelli"
                    description="We are the Authorized Distributor of Benelli Shotguns in Malaysia."
                />



            </ParallaxSection>

            <ParallaxSection
                bgImage="ammo-bg.jpg"
                bgAlt="Close-up of high-caliber ammunition rounds"
                heading="Ammunition"
            >
                <CategoryColumn
                    logoSrc="/about/Logos/Remington.png"
                    logoAlt="Remington Outdoor Company"
                    description="We are the Authorized Distributor of Remington Outdoor Company ammunition in Malaysia."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/winchester.png"
                    logoAlt="Winchester Repeating Arms"
                    description="We are the Authorized Distributor of Winchester Ammunition, globally recognized for performance and heritage."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/herstal.png"
                    logoAlt="FN Herstal"
                    description="We are the Authorized Distributor of FN Herstal, a trusted name in defense-grade ammunition worldwide."
                />
            </ParallaxSection>


            <ParallaxSection
                bgImage="ammo-bg.jpg"
                bgAlt="Close-up of high-caliber ammunition rounds"
                heading="Accessories, Spare parts & Gun care"
            >
                <CategoryColumn
                    logoSrc="/about/Logos/knight.png"
                    logoAlt="Knight's Armament"
                    description="We are the Authorized Distributor of Knight's Armament, renowned for premium rails, suppressors, and firearm accessories."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/barrett.png"
                    logoAlt="Barrett Firearms"
                    description="We are the Authorized Distributor of Barrett Firearms, makers of world-class long-range rifles and optics solutions."
                />

                <CategoryColumn
                    logoSrc="/about/Logos/spring.png"
                    logoAlt="Springfield Armory"
                    description="We are the Authorized Distributor of Springfield Armory, delivering iconic firearms and tactical parts."
                />
            </ParallaxSection>


            <FeatureBanner />

        </>

    );
}
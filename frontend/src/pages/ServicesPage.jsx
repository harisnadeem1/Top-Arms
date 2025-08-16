import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import FeatureBanner from "@/components/FeatureBanner";

const FixedParallaxSection = ({ bgImage, bgAlt, children, className = '' }) => {
    return (
        <section
            className={`relative w-full bg-fixed bg-cover bg-no-repeat ${className}`}
            style={{ backgroundImage: `url(${bgImage})` }}
            aria-label={bgAlt}
        >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
                {children}
            </div>
        </section>
    );
};

const ServiceCategory = ({ title, description }) => (
    <div className="mb-6">
        <h3 className="text-primary font-bold text-2xl md:text-lg tracking-wider">{title}</h3>
        <div className="w-4/5 h-1 bg-primary/70 my-2"></div>
        <p className="text-white/80 text-xl md:text-base">{description}</p>
    </div>
);

export default function ServicesPage() {
    return (
        <>
            <Helmet>
                <title>Services & Support | Top Arms</title>
                <meta
                    name="description"
                    content="Discover the comprehensive services offered by Top Arms, from retail and wholesale to gunsmithing and a state-of-the-art testing range."
                />
                <meta property="og:title" content="Services & Support | Top Arms" />
                <meta
                    property="og:description"
                    content="More than just a dealer. We provide expert support for retail, wholesale, and law enforcement partners."
                />
            </Helmet>

            <div className="bg-background">
                {/* FIRST SECTION (height auto on mobile, fixed on desktop) */}
                <FixedParallaxSection
                    bgImage="/Services/services-3.jpg"
                    bgAlt="Close-up of a modern firearm with intricate details"
                    className="h-auto md:h-screen md:min-h-[800px] bg-center relative"
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 z-0"></div>

                    <div className="container-max pt-8 pb-10 md:pb-0 md:pt-0 section-padding h-full flex items-center relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 w-full">
                            {/* LEFT COLUMN */}
                            <div className="flex md:items-start md:justify-center text-left md:text-left pt-20 md:pt-0">
                                <h1 className="headline text-5xl md:text-6xl lg:text-5xl text-white max-w-[300px] mx-0 md:mx-0 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.7)]">
                                    SERVICES & SUPPORT
                                </h1>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="flex flex-col justify-center text-left pt-2 md:pt-0">
                                <h2 className="text-2xl md:text-lg font-bold italic text-primary mb-4 [text-shadow:_1px_1px_4px_rgba(0,0,0,0.5)]">
                                    WE ARE MORE THAN JUST A DEALER…
                                </h2>
                                <p className="subtext text-xl md:text-base text-white mb-8">
                                    At Top Arms, we are not just a firearms dealer. We take your defense, sporting, and professional equipment needs seriously by offering a complete range of services designed to support every aspect of ownership. Our solutions go beyond sales — we provide expert repairs, professional training, and access to our upcoming state-of-the-art testing range, where enthusiasts and professionals alike can sharpen their skills in a safe and controlled environment.
                                </p>

                                {/* Grid that collapses to 1 column on mobile */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
                                    <ServiceCategory
                                        title="RETAIL"
                                        description="A curated selection of premium firearms and accessories for the discerning enthusiast."
                                    />
                                    <ServiceCategory
                                        title="SERVICES"
                                        description="Expert gunsmithing, customization, and maintenance to keep your equipment at peak performance."
                                    />
                                    <ServiceCategory
                                        title="WHOLESALE"
                                        description="Reliable distribution and logistics for our network of dealers and partners across the region."
                                    />
                                    <ServiceCategory
                                        title="LAW ENFORCEMENT"
                                        description="Specialized procurement and support for agencies requiring mission-critical equipment."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </FixedParallaxSection>

                {/* SECOND SECTION (shorter, bg shifted lower) */}
{/* SECOND SECTION (shorter, bg shifted lower) */}
<FixedParallaxSection
    bgImage="/Services/services-1.jpg"
    bgAlt="Two shooters aiming down the sights of their rifles at an indoor range"
    className="h-[60vh] md:h-[70vh] bg-[center_70%] relative overflow-hidden"
>
    <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/70 before:via-black/40 before:to-transparent"></div>
    <div className="container-max section-padding h-full flex items-center justify-start">
        <div className="max-w-lg relative z-10">
            <p className="eyebrow text-primary italic">UPCOMING FACILITY</p>
            <h2 className="headline text-5xl md:text-7xl text-white my-4 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.7)]">
                TESTING RANGE
            </h2>
            <p className="subtext text-lg text-white/90">
                Our state-of-the-art indoor testing range is designed for both seasoned professionals and first-time shooters. With advanced ventilation, safety systems, and multiple lanes, it's the perfect environment to hone your skills, test new equipment, or simply enjoy a day at the range under expert supervision.
            </p>
        </div>
    </div>
</FixedParallaxSection>

{/* THIRD SECTION (shorter, bg shifted lower) */}
<FixedParallaxSection
    bgImage="/Services/services-2.jpg"
    bgAlt="A gunsmith carefully working on a firearm at a workbench"
    className="h-[60vh] md:h-[70vh] bg-[center_80%] relative overflow-hidden"
>
    <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-l before:from-black/70 before:via-black/40 before:to-transparent"></div>
    <div className="container-max section-padding h-full flex items-center justify-start">
        <div className="max-w-lg relative z-10">
            <p className="eyebrow text-primary uppercase">EXPERT GUNSMITHING</p>
            <h2 className="headline text-5xl md:text-7xl text-white my-4 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.7)]">
                REPAIRS & CUSTOMIZATION
            </h2>
            <p className="subtext text-lg text-white/90">
                From routine maintenance and repairs to complete custom builds, our certified gunsmiths combine traditional craftsmanship with modern technology. We treat every firearm with meticulous care to ensure it meets and exceeds factory standards for performance and reliability.
            </p>
        </div>
    </div>
</FixedParallaxSection>

                <FeatureBanner />
            </div>
        </>
    );
}
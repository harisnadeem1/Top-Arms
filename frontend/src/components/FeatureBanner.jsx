import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { toast } from '@/components/ui/use-toast';

    const notImplemented = () =>
      toast({
        title: "Heads up!",
        description:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });

    const marqueeVariants = {
      animate: {
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      },
    };

    const HollowText = ({ children }) => (
      <span className="headline text-4xl md:text-6xl lg:text-8xl text-stroke whitespace-nowrap px-8">
        {children}
      </span>
    );
      
    export default function FeatureBanner() {
      return (
        <motion.section
          id="feature"
          className="relative py-20 sm:py-32 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0">
            <img  class="w-full h-full object-cover" alt="Tactical operator in action" src="https://images.unsplash.com/photo-1486412625743-8354d663c409" loading="lazy" />
          </div>
          <div className="overlay-dark"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-background"></div>
          
          <div className="relative container-max text-center z-10 flex flex-col items-center">
            <p className="eyebrow text-primary">TOP ARMS</p>
            <h2 className="headline text-3xl sm:text-5xl my-4 max-w-3xl">
              Engineered for the Decisive Moment
            </h2>
            <p className="subtext max-w-2xl mb-8">
              We provide the tools that perform when it matters most. Uncompromising quality for the modern operator and enthusiast.
            </p>
            <Button
              onClick={notImplemented}
              size="lg"
              className="uppercase tracking-wider font-extrabold text-white orange-gradient hover:brightness-110 transition-all shadow-2xl shadow-orange-900/40"
            >
              Discover Our Mandate
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 py-8 z-0">
            <div className="overflow-hidden">
                <motion.div className="flex" variants={marqueeVariants} animate="animate">
                    <HollowText>RELIABILITY</HollowText>
                    <HollowText>PRECISION</HollowText>
                    <HollowText>PERFORMANCE</HollowText>
                    <HollowText>INNOVATION</HollowText>
                    <HollowText>RELIABILITY</HollowText>
                    <HollowText>PRECISION</HollowText>
                    <HollowText>PERFORMANCE</HollowText>
                    <HollowText>INNOVATION</HollowText>
                </motion.div>
            </div>
          </div>
        </motion.section>
      );
    }
import React from 'react';
    import { Helmet } from 'react-helmet';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { teamData } from '@/data/teamData';
    import { Button } from '@/components/ui/button';

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
        },
      },
    };

    const TeamCard = ({ member }) => (
      <motion.div
        variants={itemVariants}
        className="bg-card border border-border rounded-lg overflow-hidden flex flex-col group"
      >
        <div className="overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-bold text-xl text-white">{member.name}</h3>
          <p className="text-primary font-medium">{member.role}</p>
          <p className="text-muted-foreground mt-2 text-sm flex-grow">{member.description}</p>
          <Button asChild variant="danger" className="w-full mt-4 uppercase tracking-wider font-bold">
            <Link to={`/team/${member.id}`}>View Profile</Link>
          </Button>
        </div>
      </motion.div>
    );

    export default function TeamPage() {
      return (
        <>
          <Helmet>
            <title>Our Team | Top Arms</title>
            <meta name="description" content="Meet the dedicated professionals behind Top Arms, driving our mission of excellence in the firearms industry." />
            <meta property="og:title" content="Our Team | Top Arms" />
            <meta property="og:description" content="The people who power TOP ARMS SDN BHD." />
          </Helmet>

          <div className="bg-background text-white">
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5" alt="A professional team working together in a modern office" className="w-full h-full object-cover" />
                <div className="overlay-dark"></div>
              </div>
              <motion.div
                className="relative z-10 section-padding"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="headline text-5xl sm:text-7xl">Meet Our Team</h1>
                <p className="subtext mt-4 text-lg">The people who power TOP ARMS SDN BHD.</p>
              </motion.div>
            </section>

            <section className="section-padding py-16 sm:py-24">
              <motion.div
                className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {teamData.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </motion.div>
            </section>
          </div>
        </>
      );
    }
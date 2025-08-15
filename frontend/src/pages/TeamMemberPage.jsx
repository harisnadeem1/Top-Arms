import React from 'react';
    import { useParams, Link, useNavigate } from 'react-router-dom';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
    import { teamData } from '@/data/teamData';
    import { Button } from '@/components/ui/button';
    import { toast } from '@/components/ui/use-toast';

    const notImplemented = () =>
      toast({
        title: "Heads up!",
        description:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });

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
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
        },
      },
    };

    export default function TeamMemberPage() {
      const { memberId } = useParams();
      const navigate = useNavigate();
      const member = teamData.find((m) => m.id === memberId);

      if (!member) {
        return (
          <div className="h-screen flex flex-col items-center justify-center text-center bg-background text-white section-padding">
            <h1 className="headline text-4xl mb-4">Member Not Found</h1>
            <p className="subtext mb-8">The team member you are looking for does not exist.</p>
            <Button onClick={() => navigate('/team')}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
            </Button>
          </div>
        );
      }

      return (
        <>
          <Helmet>
            <title>{`${member.name} | Top Arms Team`}</title>
            <meta name="description" content={`Learn more about ${member.name}, ${member.role} at Top Arms.`} />
            <meta property="og:title" content={`${member.name} | Top Arms Team`} />
            <meta property="og:description" content={member.bio} />
          </Helmet>

          <div className="bg-background text-white">
            <section className="relative h-[70vh] min-h-[500px] flex items-end justify-start text-white">
              <div className="absolute inset-0">
                <img src={member.heroImage} alt={`${member.name} professional background`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
              </div>
              <motion.div
                className="relative z-10 section-padding container-max pb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="headline text-5xl sm:text-7xl">{member.name}</h1>
                <p className="text-2xl text-primary font-semibold mt-2">{member.role}</p>
              </motion.div>
            </section>

            <section className="section-padding py-16 sm:py-24">
              <div className="container-max">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                  <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={member.profileImage} alt={member.name} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
                  </motion.div>

                  <motion.div
                    className="lg:col-span-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <motion.p variants={itemVariants} className="subtext text-lg leading-relaxed">
                      {member.bio}
                    </motion.p>

                    <motion.h2 variants={itemVariants} className="headline text-3xl mt-12 mb-6">Career Timeline</motion.h2>
                    <div className="space-y-4 border-l-2 border-primary/30 pl-6">
                      {member.timeline.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative"
                        >
                          <div className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                          <p className="font-bold text-primary text-sm">{item.year}</p>
                          <p className="font-semibold text-white text-lg">{item.title}</p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.h2 variants={itemVariants} className="headline text-3xl mt-12 mb-6">Key Skills</motion.h2>
                    <ul className="grid grid-cols-2 gap-4">
                      {member.skills.map((skill) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span className="font-medium">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-12">
                      <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                        <Link to="/team">
                          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Team
                        </Link>
                      </Button>
                      <Button onClick={notImplemented} size="lg" className="text-white orange-gradient hover:brightness-110">
                        Contact {member.name.split(' ')[0]} <Phone className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }
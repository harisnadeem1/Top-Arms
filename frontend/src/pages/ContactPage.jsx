
import React, { useEffect, useState } from 'react';
    import { useLocation } from 'react-router-dom';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { toast } from '@/components/ui/use-toast';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

    const notImplemented = (message) =>
      toast({
        title: "Message Sent!",
        description: message,
      });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.2,
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
        },
      },
    };

    export default function ContactPage() {
      const location = useLocation();
      const [subject, setSubject] = useState(location.state?.subject || 'General Inquiry');

      useEffect(() => {
        if (location.state?.subject) {
          setSubject(location.state.subject);
        }
      }, [location.state]);

      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        notImplemented(`Thank you, ${name}. We've received your inquiry and will be in touch shortly.`);
        e.target.reset();
        setSubject('General Inquiry');
      };

      return (
        <>
          <Helmet>
            <title>Contact Us | Top Arms</title>
            <meta name="description" content="Get in touch with Top Arms for inquiries, support, or partnership opportunities. Visit our office or send us a message." />
            <meta property="og:title" content="Contact Us | Top Arms" />
            <meta property="og:description" content="Reach out to the Top Arms team." />
          </Helmet>

          <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/dark-concrete.png')` }}
          >
            <div className="min-h-screen bg-black/80 section-padding py-24 sm:py-32">
              <div className="container-max">
                <motion.div
                  className="grid lg:grid-cols-2 gap-16"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <h1 className="headline text-5xl text-white">CONTACT</h1>
                    <p className="text-primary italic font-semibold mt-4">
                      FOR ANY ENQUIRIES OR FURTHER INFORMATION ABOUT OUR BUSINESS, YOU ARE WELCOME TO VISIT OUR OFFICE OR CONTACT US.
                    </p>

                    <div className="mt-12 space-y-8">
                      <div>
                        <h2 className="font-bold text-white uppercase text-lg">TOP ARMS (HQ) SDN. BHD.</h2>
                        <p className="text-neutral-400 text-sm">Company No: 1234567-X</p>
                        <p className="text-white mt-2">123, Jalan Taktikal, 50480 Kuala Lumpur, Malaysia.</p>
                        <p className="text-white">Tel: +603 1234 5678</p>
                        <p className="text-white">HP: +6012 345 6789</p>
                      </div>

                      <div className="p-6 orange-gradient rounded-lg text-white">
                        <h3 className="font-bold uppercase">Operating Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday & Sunday: <span className="font-bold">Closed</span></p>
                      </div>
                      
                      <div className="border-t border-primary/20 pt-8">
                        <h2 className="font-bold text-white uppercase text-lg">SARASUTRA ARMS CENTRE SDN. BHD.</h2>
                        <p className="text-neutral-400 text-sm">Company No: 7654321-A</p>
                        <p className="text-white mt-2">45, Lorong Senjata, 10200 Penang, Malaysia.</p>
                      </div>

                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input name="name" type="text" placeholder="Name" className="bg-transparent border-primary/50 focus:border-primary text-white" required />
                        <Input name="number" type="tel" placeholder="Number" className="bg-transparent border-primary/50 focus:border-primary text-white" required />
                      </div>
                      <Input name="email" type="email" placeholder="Email" className="bg-transparent border-primary/50 focus:border-primary text-white" required />
                      
                      <Select value={subject} onValueChange={setSubject}>
                        <SelectTrigger className="bg-transparent border-primary/50 focus:border-primary text-white">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value={subject} disabled={subject === 'General Inquiry'}>{subject}</SelectItem>
                          <SelectItem value="Wholesale & Dealer">Wholesale & Dealer</SelectItem>
                          <SelectItem value="Support">Support</SelectItem>
                        </SelectContent>
                      </Select>

                      <Textarea name="message" placeholder="Message" rows={6} className="bg-transparent border-primary/50 focus:border-primary text-white" required />
                      
                      <Button type="submit" size="lg" className="w-full orange-gradient uppercase font-bold tracking-wider">
                        Send
                      </Button>
                    </form>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </>
      );
    }

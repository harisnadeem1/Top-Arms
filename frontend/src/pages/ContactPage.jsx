import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FeatureBanner from "@/components/FeatureBanner";

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

  // ✅ Updated handleSubmit to call backend
  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    number: formData.get('number'),
    email: formData.get('email'),
    subject,
    message: formData.get('message'),
  };

  // ✅ Clear form immediately
  e.target.reset();
  setSubject("General Inquiry");

  // ✅ Show "sending..." toast right away
  toast({
    title: "Sending...",
    description: "Your message is being sent. Please wait.",
  });

  try {
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: `Thank you, ${data.name}. We've received your inquiry and will be in touch shortly.`,
      });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  } catch (err) {
    toast({
      title: "Error",
      description: "Could not send email. Please try again later.",
      variant: "destructive",
    });
  }
};


  return (
    <>
      <Helmet>
        <title>Contact Us | Top Arms</title>
        <meta
          name="description"
          content="Get in touch with Top Arms for inquiries, support, or partnership opportunities. Visit our office or send us a message."
        />
        <meta property="og:title" content="Contact Us | Top Arms" />
        <meta property="og:description" content="Reach out to the Top Arms team." />
      </Helmet>

      <div
        className="min-h-screen bg-repeat bg-center"
        style={{ backgroundImage: `url('/background/background.jpg')` }}
      >
        <div className="min-h-screen section-padding py-24 pt-36 sm:pt-36 sm:py-32">
          <div className="container-max">
            <motion.div
              className="grid lg:grid-cols-2 gap-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Left Section: Company Info */}
              <motion.div variants={itemVariants}>
                <h1 className="headline text-5xl text-white">CONTACT</h1>
                <p className="text-primary italic font-semibold mt-4">
                  For any inquiries or further information about our business, you are welcome to visit our office or contact us.
                </p>

                <div className="mt-12 space-y-8">
                  <div>
                    <h2 className="font-bold text-white uppercase text-lg">TOP ARMS SDN. BHD.</h2>
                    <p className="text-neutral-400 text-sm">Company Reg. No: 202101035785 (1436085-X)</p>
                    <p className="text-neutral-400 text-sm">Date of Registration: 28-10-2021</p>
                    <p className="text-white mt-2">
                      No.45, Jalan Kiambang 3,
                      Pusat Komersial Indah, Bandar Indahpura,
                      81000 Kulai, Johor, Malaysia
                    </p>
                    <p className="text-white">Tel: 07-660 7988</p>
                    <p className="text-white">Email: info@toparms.com.my / top_arms.sb@yahoo.com</p>
                    <p className="text-white">Website: www.toparms.com.my</p>
                  </div>

                  <div className="p-6 orange-gradient rounded-lg text-white">
                    <h3 className="font-bold uppercase">Operating Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>
                      Saturday & Sunday: <span className="font-bold">Closed</span>
                    </p>
                  </div>

                  <div className="border-t border-primary/20 pt-8">
                    <h2 className="font-bold text-white uppercase text-lg">Business Information</h2>
                    <p className="text-white mt-2">Licensed Firearms & Ammunition Dealer</p>
                    <p className="text-white mt-2">
                      Nature of Business: Supply, wholesale import & export of arms, ammunition, and accessories.
                      Maintenance, repair & overhaul of all arms and ammunition products.
                    </p>
                    <p className="text-white mt-2">Paid Up Capital: RM 1,000,000.00</p>
                    <p className="text-white mt-2">Bank: Affin Bank Berhad</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Section: Contact Form */}
              <motion.div variants={itemVariants}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="bg-transparent border-primary/50 focus:border-primary text-white"
                      required
                    />
                    <Input
                      name="number"
                      type="tel"
                      placeholder="Number"
                      className="bg-transparent border-primary/50 focus:border-primary text-white"
                      required
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border-primary/50 focus:border-primary text-white"
                    required
                  />

                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger className="bg-transparent border-primary/50 focus:border-primary text-white">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      <SelectItem value="Products">Products</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    className="bg-transparent border-primary/50 focus:border-primary text-white"
                    required
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full orange-gradient uppercase font-bold tracking-wider"
                  >
                    Send
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <FeatureBanner />
      </div>
    </>
  );
}

import React from 'react';
import { toast } from '@/components/ui/use-toast';
import { Github, Twitter, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Link } from "react-router-dom";

const SocialIcon = ({ Icon }) => (
  <button
    onClick={() =>
      toast({
        title: "Heads up!",
        description:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      })
    }
    className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-colors"
  >
    <Icon className="w-5 h-5" />
  </button>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // ✅ Clear instantly
    e.target.reset();

    // ✅ Show toast instantly
    toast({
      title: "Subscribed!",
      description: `${email} has been added to our newsletter.`,
    });

    // ✅ Fire and forget request to backend
    fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch((err) => console.error("Subscription request failed:", err));
  };

  return (
    <footer
      id="contact"
      className="section-padding pt-16 pb-8  bg-repeat bg-center"
      style={{ backgroundImage: "url('/background/background.jpg')" }} // 👈 set your background image path here
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
  className="w-auto h-20 sm:h-14 object-contain mb-4" // 👈 bigger on mobile, normal on sm+
  alt="Company logo footer"
  src="/logo/top-arms-logo.png"
/>
            <p className="text-base text-neutral-400 mb-6">
              Top Arms Sdn. Bhd. is a licensed firearms and ammunition dealer
              based in Johor, Malaysia. We specialize in the supply, import, and
              export of arms, ammunition, and tactical accessories, as well as
              providing maintenance and repair services. With a strong
              commitment to quality and compliance, we serve both individual
              clients and organizations with trusted solutions.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-2">
            <p className="font-bold text-lg mb-2">Stay Updated</p>
            <p className="text-sm text-neutral-400 mb-4">
              Subscribe to our newsletter for the latest product drops and
              exclusive offers.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/20"
                required
              />
              <Button
                type="submit"
                className="w-full sm:w-auto uppercase tracking-wider font-bold text-white orange-gradient hover:brightness-110"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 text-center sm:text-left">
            © {year} Top Arms. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="/policy/terms"
              className="text-base text-neutral-400 hover:text-primary transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/policy/privacy"
              className="text-base text-neutral-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

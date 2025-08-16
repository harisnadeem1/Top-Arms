import React from 'react';
    import { toast } from '@/components/ui/use-toast';
    import { Github, Twitter, Instagram } from 'lucide-react';
    import { Button } from './ui/button';
    import { Input } from './ui/input';
    import { Link } from "react-router-dom";

    const notImplemented = () =>
      toast({
        title: "Heads up!",
        description:
          "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });

    const SocialIcon = ({ Icon }) => (
      <button onClick={notImplemented} className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-colors">
        <Icon className="w-5 h-5" />
      </button>
    );

    export default function Footer() {
      const year = new Date().getFullYear();
      return (
        <footer id="contact" className="section-padding pt-16 pb-8 bg-black/40 border-t border-white/10">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <img  class="w-auto h-14 object-contain mb-4" alt="Company logo footer" src="/logo/top-arms-logo.png" />
                <p className="text-sm text-neutral-400 mb-6">
                  The premier destination for elite firearms, ammunition, and tactical gear.
                </p>
                <div className="flex items-center gap-3">
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Instagram} />
                  <SocialIcon Icon={Github} />
                </div>
              </div>
              <div className="lg:col-span-2">
                <p className="font-bold text-lg mb-2">Stay Updated</p>
                <p className="text-sm text-neutral-400 mb-4">Subscribe to our newsletter for the latest product drops and exclusive offers.</p>
                <form onSubmit={(e) => { e.preventDefault(); notImplemented(); }} className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Enter your email" className="bg-white/5 border-white/20" required />
                  <Button type="submit" className="w-full sm:w-auto uppercase tracking-wider font-bold text-white orange-gradient hover:brightness-110">Subscribe</Button>
                </form>
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-500 text-center sm:text-left">
                © {year} Top Arms. All Rights Reserved.
              </p>
              

<div className="flex gap-4">
  <Link
    to="/policy/terms"
    className="text-xs text-neutral-400 hover:text-primary transition-colors"
  >
    Terms &amp; Conditions
  </Link>
  <Link
    to="/policy/privacy"
    className="text-xs text-neutral-400 hover:text-primary transition-colors"
  >
    Privacy Policy
  </Link>
</div>

            </div>
          </div>
        </footer>
      );
    }
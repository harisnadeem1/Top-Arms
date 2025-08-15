import React from "react";
    import { Button } from "@/components/ui/button";

    function scrollToId(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    export default function TrustBanner() {
      return (
        <section id="services" className="relative section-padding py-16 sm:py-20">
          <div className="absolute inset-0 rounded-none">
            <img  class="w-full h-full object-cover" alt="Trust banner tactical background" src="https://images.unsplash.com/photo-1579758300918-333e43ba760d" />
          </div>
          <div className="overlay-dark"></div>

          <div className="relative container-max">
            <div className="max-w-4xl">
              <p className="eyebrow mb-2">Dependable. Compliant. Proven.</p>
              <h2 className="headline text-2xl sm:text-3xl">
                YOUR TRUSTED DISTRIBUTOR OF QUALITY FIREARMS AND AMMUNITION IN THE REGION
              </h2>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => scrollToId("about")}
                  className="uppercase tracking-wider font-extrabold text-white orange-gradient hover:brightness-110 transition-all shadow-lg shadow-orange-900/20"
                >
                  Read More About Us
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToId("contact")}
                  className="uppercase tracking-wider font-bold border-[hsl(var(--primary))] text-[hsl(var(--primary))] bg-white/0 hover:bg-[hsl(var(--primary))]/10"
                >
                  Speak to Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      );
    }
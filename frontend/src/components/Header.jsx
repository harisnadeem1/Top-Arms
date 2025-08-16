import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Services & Support", path: "/services" },
    { label: "Our Team", path: "/team" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out"
      animate={{
        paddingTop: isScrolled ? "0.5rem" : "0",
        paddingBottom: isScrolled ? "0.5rem" : "0",
        margin: isScrolled ? ["0.5rem", "0.5rem", "0.5rem", "0.5rem"] : "0",
      }}
      style={{
        marginLeft: isScrolled ? (window.innerWidth >= 1024 ? "1rem" : "0.5rem") : "0",
        marginRight: isScrolled ? (window.innerWidth >= 1024 ? "1rem" : "0.5rem") : "0",
      }}
    >
      <div className="flex justify-center">
        <motion.nav
          aria-label="Primary"
          className="transition-all duration-300 ease-in-out rounded-xl"
          animate={{
            width: isScrolled ? "90%" : "100%",
            height: isScrolled ? "auto" : "6rem",
          }}
          style={{
            ...(isScrolled
              ? {
                  backdropFilter: "blur(16px)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }
              : {
                  backdropFilter: "blur(4px)",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  border: "1px solid transparent",
                }),
          }}
        >
          <div className="flex items-center section-padding py-2 h-full relative">
            <div className="flex justify-center w-full lg:w-auto">
              <Link to="/" onClick={() => setIsOpen(false)} aria-label="Go to homepage">
                <img
                  className="w-auto h-16 object-contain"
                  alt="Company logo"
                  src="/logo/top-arms-logo.png"
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
              {navItems.map((item) => {
                const isActive =
                  item.path &&
                  (location.pathname === item.path ||
                    (item.label === "Products" &&
                      location.pathname.startsWith("/category")) ||
                    (item.path === "/team" &&
                      location.pathname.startsWith("/team")));
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={cn(
                      "text-[18px] font-black uppercase text-white hover:text-primary transition-colors italic font-kanit",
                      isActive && "text-primary"
                    )}
                    style={{ fontFamily: "Kanit, sans-serif" }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link to="/contact">
                <Button
                  size="sm"
                  className={cn(
                    "text-[18px] uppercase italic font-extrabold text-white orange-gradient hover:brightness-110 transition-all shadow-lg shadow-orange-900/30 font-kanit"
                  )}
                  style={{ fontFamily: "Kanit, sans-serif" }}
                >
                  Contact
                </Button>
              </Link>
            </div>
            <div className="lg:hidden absolute right-0 pr-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white "
                aria-label="Toggle menu"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isOpen ? "x" : "menu"}
                    initial={{ rotate: isOpen ? -90 : 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: isOpen ? 0 : -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 p-4"
          >
            <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-lg p-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.path &&
                  (location.pathname === item.path ||
                    (item.label === "Products" &&
                      location.pathname.startsWith("/category")) ||
                    (item.path === "/team" &&
                      location.pathname.startsWith("/team")));
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "w-full text-left py-3 px-3 text-base font-bold tracking-wider uppercase text-white hover:bg-white/10 rounded-md transition-colors",
                      isActive && "text-primary bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2 uppercase tracking-wider font-extrabold text-white orange-gradient hover:brightness-110 transition-all shadow-lg shadow-orange-900/30">
                  Contact
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

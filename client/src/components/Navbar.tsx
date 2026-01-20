import { Link } from "wouter";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Benefits", href: "why-us" },
    { name: "Products", href: "products" },
    { name: "Team", href: "team" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img src="/images/logo.png" alt="Shivmukha Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl leading-none text-primary tracking-tighter uppercase">
                Shivmukha
              </span>
              <span className="text-[10px] text-accent font-black tracking-[0.3em] uppercase">
                Bio Fertilizers
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-4">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary hover:bg-primary/90 rounded-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

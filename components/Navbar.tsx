'use client';
import { motion } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-forest/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-wider text-cream group" aria-label="R&W Tree Service Home">
          R&W <span className="text-gold italic group-hover:text-lime transition-colors">Tree Service</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-cream/80 hover:text-lime transition-colors uppercase tracking-widest">Services</a>
          <a href="#about" className="text-sm font-medium text-cream/80 hover:text-lime transition-colors uppercase tracking-widest">About</a>
          <a href="#reviews" className="text-sm font-medium text-cream/80 hover:text-lime transition-colors uppercase tracking-widest">Reviews</a>
          <a href="tel:9084499517" className="flex items-center gap-2 bg-gold/10 border border-gold text-gold px-5 py-2.5 rounded-none clip-button hover:bg-gold hover:text-forest hover:shadow-[0_0_20px_rgba(200,168,75,0.4)] transition-all duration-300 font-medium" aria-label="Call us at (908) 449-9517">
            <Phone size={16} />
            <span>(908) 449-9517</span>
          </a>
        </div>

        <button
          className="md:hidden text-cream"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-forest border-t border-gold/20 mt-4"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg text-cream hover:text-lime">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-cream hover:text-lime">About</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-lg text-cream hover:text-lime">Reviews</a>
            <a href="tel:9084499517" className="text-gold font-bold text-lg flex items-center gap-2">
              <Phone size={20} /> (908) 449-9517
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

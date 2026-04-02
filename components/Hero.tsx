'use client';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden z-10">
      {/* Giant Ghost Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none" aria-hidden="true">
        <h2 className="text-[15vw] font-serif font-black text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '2px #F5F0E8' }}>
          ARBORISTS
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-cream/80 text-sm font-medium tracking-wider uppercase">5.0 Rated in Elizabeth, NJ</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8">
            Expert <span className="text-gold italic">Tree Service in Elizabeth, NJ</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-cream/70 max-w-2xl mb-12 leading-relaxed">
            Professional tree removal, trimming, and stump grinding. We bring luxury care to your landscape with 24/7 emergency response.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            <a href="tel:9084499517" className="group relative inline-flex items-center justify-center gap-3 bg-lime text-forest px-8 py-4 text-lg font-bold clip-button hover:bg-cream transition-colors duration-300" aria-label="Call for a free consultation at (908) 449-9517">
              <span>Free Consultation</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-lime opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" aria-hidden="true"></div>
            </a>
            
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-cream border border-cream/20 clip-button hover:border-gold hover:text-gold transition-colors duration-300" aria-label="View our tree services">
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest text-cream/50">Scroll</span>
        <div className="w-[1px] h-12 bg-cream/20 overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-gold"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

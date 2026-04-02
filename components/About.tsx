'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 bg-[#0A1406]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold tracking-widest text-lime uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-lime"></span> About R&W
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Trusted <span className="text-gold italic">Tree Service</span> Professionals in Elizabeth, NJ
            </h2>
            <p className="text-cream/70 text-lg mb-6 leading-relaxed">
              At R&W Tree Service LLC, we blend arboricultural expertise with an unwavering commitment to customer satisfaction. Serving Elizabeth, NJ and surrounding Union County areas, we tackle everything from delicate pruning to complex, hazardous removals.
            </p>
            <p className="text-cream/70 text-lg mb-10 leading-relaxed">
              Our team is fully equipped, highly trained, and ready to respond when you need us most. We believe in transparent pricing, punctuality, and leaving your property cleaner than we found it.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-cream/10 pt-10">
              <div>
                <div className="text-4xl font-serif font-bold text-gold mb-2">5.0</div>
                <div className="text-sm text-cream/60 uppercase tracking-wider">Google Rating</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-lime mb-2">24/7</div>
                <div className="text-sm text-cream/60 uppercase tracking-wider">Emergency Service</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-forest to-transparent z-10"></div>
            <div className="absolute inset-0 border border-gold/30 clip-button translate-x-4 translate-y-4 z-0"></div>
            <Image 
              src="https://picsum.photos/seed/forestcanopy/800/1200" 
              alt="Professional tree service team working in Elizabeth NJ" 
              fill
              referrerPolicy="no-referrer"
              className="object-cover clip-button relative z-10 grayscale-[20%] contrast-125"
            />
            
            {/* Rotating Ring Animation */}
            <div className="absolute bottom-10 left-10 z-20 bg-forest/80 backdrop-blur-md p-6 clip-button border border-gold/20 flex items-center gap-6">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-gold rounded-full"
                  aria-hidden="true"
                />
                <div className="text-2xl font-serif font-bold text-lime">#1</div>
              </div>
              <div>
                <div className="font-bold text-lg">Top Rated</div>
                <div className="text-sm text-cream/60">in Union County</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

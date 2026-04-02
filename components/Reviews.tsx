'use client';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Christine Desa',
    role: 'Local Guide',
    text: 'We have used them a couple times now and never disappoint. They show up when they say, do a great job, and are reasonably priced.',
  },
  {
    name: 'Dan Clark',
    role: 'Local Guide',
    text: 'The best and most affordable tree pros I could find. Rigo was the best in every way.',
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 relative z-10 bg-forest overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[100px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-lime/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-gold/50 rounded-full border-dashed"
              />
              <div className="text-3xl font-serif font-bold text-cream">5.0</div>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Tree Service <span className="text-gold italic">Client Testimonials</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-cream/70 text-lg"
          >
            Don&apos;t just take our word for it. See what our neighbors in Elizabeth have to say about our tree removal and maintenance services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0A1406] p-10 border border-cream/10 clip-button relative group hover:border-gold/40 transition-colors duration-500"
            >
              <Quote size={48} className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors" aria-hidden="true" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xl font-serif leading-relaxed mb-8 text-cream/90">&quot;{review.text}&quot;</p>
              <div>
                <div className="font-bold text-lg text-lime">{review.name}</div>
                <div className="text-sm text-cream/50 uppercase tracking-wider">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

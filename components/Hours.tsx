'use client';
import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';

export default function Hours() {
  return (
    <section className="py-32 relative z-10 bg-[#0A1406] border-t border-cream/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              24/7 <span className="text-gold italic">Emergency Tree Service</span> & Location
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Based in Elizabeth, NJ, we serve the surrounding communities with prompt, professional tree care.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream/5 text-lime rounded-full mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Service Area</h3>
                  <p className="text-cream/70">Elizabeth, NJ and surrounding Union County areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream/5 text-gold rounded-full mt-1">
                  <Clock size={24} />
                </div>
                <div className="w-full max-w-md">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/80">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/80">Saturday</span>
                      <span className="font-medium">8:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/80">Sunday</span>
                      <span className="font-medium text-rust">Closed</span>
                    </li>
                    <li className="flex justify-between pt-2">
                      <span className="text-lime font-bold flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
                        </span>
                        Emergency Service
                      </span>
                      <span className="font-bold text-lime">24/7 Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-forest border border-gold/20 p-10 clip-button flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/woodtexture/800/800')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <h3 className="text-3xl font-serif font-bold mb-4 relative z-10">Need an Estimate?</h3>
            <p className="text-cream/70 mb-8 max-w-sm relative z-10">Contact us today for a free, no-obligation consultation for your tree service needs.</p>
            <a href="tel:9084499517" className="group relative inline-flex items-center justify-center gap-3 bg-gold text-forest px-10 py-5 text-xl font-bold clip-button hover:bg-lime transition-colors duration-300 z-10" aria-label="Call us at (908) 449-9517">
              <span>(908) 449-9517</span>
              <div className="absolute inset-0 bg-lime opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" aria-hidden="true"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

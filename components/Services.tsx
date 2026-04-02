'use client';
import { motion } from 'motion/react';
import { Scissors, TreePine, Axe, ShieldAlert, Leaf, Home, Shovel, Sprout, ArrowRight } from 'lucide-react';

const services = [
  { title: 'Tree Removal', icon: Axe, desc: 'Safe, efficient removal of dead or hazardous trees of any size.' },
  { title: 'Trimming & Pruning', icon: Scissors, desc: 'Expert pruning to enhance tree health, structure, and aesthetic appeal.' },
  { title: 'Stump Grinding', icon: Shovel, desc: 'Complete stump removal to clear your yard and prevent pests.' },
  { title: 'Tree Planting', icon: Sprout, desc: 'Strategic planting services to beautify your property.' },
  { title: 'Landscape Design', icon: Leaf, desc: 'Custom landscape solutions tailored to your environment.' },
  { title: 'Yard Maintenance', icon: TreePine, desc: 'Ongoing care to keep your outdoor spaces pristine.' },
  { title: 'Home Services', icon: Home, desc: 'Comprehensive exterior care for residential properties.' },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative z-10 bg-forest">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-bold tracking-widest text-lime uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-lime"></span> Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Expert <span className="text-gold italic">Tree Removal</span>, Trimming & Stump Grinding
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Emergency Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-rust/10 border border-rust/30 p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 clip-button"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rust/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-rust/30 transition-colors duration-500" aria-hidden="true"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-rust/20 text-rust rounded-full">
                    <ShieldAlert size={28} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-rust"></span>
                    </span>
                    <span className="text-rust font-bold tracking-wider uppercase text-sm">Live Dispatch</span>
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">24/7 Emergency Response</h3>
                <p className="text-cream/70 text-lg mb-8 max-w-md">Immediate assistance for storm damage, fallen trees, and hazardous situations threatening your property.</p>
              </div>
              <a href="tel:9084499517" className="inline-flex items-center gap-2 text-rust font-bold hover:text-cream transition-colors" aria-label="Call emergency tree service at (908) 449-9517">
                Call Now (908) 449-9517 <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Regular Service Cards */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream/5 border border-cream/10 p-8 group hover:-translate-y-2 hover:bg-cream/10 hover:border-gold/30 transition-all duration-500 clip-button relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_0_30px_rgba(200,168,75,0.1)] transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
              <service.icon size={32} className="text-gold mb-6 group-hover:text-lime transition-colors duration-300" aria-hidden="true" />
              <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

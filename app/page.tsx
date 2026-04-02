import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Hours from '@/components/Hours';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import CustomCursor from '@/components/CustomCursor';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <main className="relative bg-forest min-h-screen">
      <JsonLd />
      <CustomCursor />
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Hours />
      <Footer />
    </main>
  );
}

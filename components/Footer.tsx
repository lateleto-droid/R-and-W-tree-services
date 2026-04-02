import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest py-12 border-t border-cream/10 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="text-lime" size={24} aria-hidden="true" />
            <span className="text-xl font-serif font-bold tracking-wider">
              R&W <span className="text-gold italic">Tree Service</span> LLC
            </span>
          </div>
          
          <div className="text-cream/50 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} R&W Tree Service LLC. All rights reserved.</p>
            <p className="mt-1">Based in Elizabeth, NJ.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

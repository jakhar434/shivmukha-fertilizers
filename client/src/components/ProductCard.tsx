import type { Product } from "@shared/schema";
import { motion } from "framer-motion";
import { Sprout, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-none overflow-hidden border border-border shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="aspect-[4/5] bg-white relative overflow-hidden p-8">
        <div className="absolute inset-0 bg-neutral-50/50" />
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-6 right-6 bg-primary text-white px-3 py-1 text-[10px] font-black tracking-widest uppercase">
          {product.weight}
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-black text-primary mb-3 uppercase tracking-tight group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium italic">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
          <div className="flex items-center text-primary/40 font-black text-[10px] uppercase tracking-widest">
            <Sprout className="w-3 h-3 mr-2" />
            Bio-Certified
          </div>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  );
}

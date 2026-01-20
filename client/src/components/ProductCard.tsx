import type { Product } from "@shared/schema";
import { motion } from "framer-motion";
import { Sprout, Package } from "lucide-react";

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
      className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        {/* Placeholder image logic - in production this would be product.image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
            {/* Using Unsplash for realistic placeholder if image is just a string name */}
            <img 
              src={product.image.startsWith('http') ? product.image : "https://images.unsplash.com/photo-1625246333195-f8196324e0cd?w=800&q=80"}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm flex items-center gap-1">
          <Package className="w-3 h-3" />
          {product.weight}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>
        
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center text-secondary font-medium text-sm">
            <Sprout className="w-4 h-4 mr-2" />
            Organic Certified
          </div>
          <button className="text-primary text-sm font-semibold hover:underline">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

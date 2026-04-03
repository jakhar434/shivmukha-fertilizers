import { useProducts } from "@/hooks/use-products";
import { productDetails } from "@/data/product-details";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductDetailProps {
  id: string;
  onBack: () => void;
}

export default function ProductDetail({ id, onBack }: ProductDetailProps) {
  const { data: products } = useProducts();
  const productId = parseInt(id);
  const product = products?.find((p) => p.id === productId);
  const details = productDetails[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Product not found.</p>
          <Button onClick={onBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "var(--app-font-body)" }}>
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest mb-10 hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-border p-6 sm:p-10 flex items-center justify-center aspect-square md:sticky md:top-28 relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {product.weight && (
                <div className="absolute top-6 right-6 bg-primary text-white px-3 py-1 text-[10px] font-black tracking-widest uppercase">
                  {product.weight}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sprout className="w-4 h-4 text-accent" />
                  <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">
                    Bio-Certified Product
                  </span>
                </div>
                <h1 className="text-4xl font-black text-primary uppercase tracking-tight leading-tight mb-2">
                  {product.name}
                </h1>
                <p className="text-muted-foreground font-medium italic text-lg">
                  {product.description}
                </p>
              </div>

              {details?.fullDescription && (
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-foreground/80 leading-relaxed">
                    {details.fullDescription}
                  </p>
                </div>
              )}

              {details?.sections.map((section, i) => (
                <div key={i} className="space-y-3">
                  <h3 className="font-black uppercase tracking-tight text-primary text-sm border-b border-border pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="pt-4">
                <Button
                  onClick={onBack}
                  className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 font-black uppercase tracking-widest text-sm"
                >
                  ← Explore More Products
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

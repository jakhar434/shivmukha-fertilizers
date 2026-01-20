import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { TeamCard } from "@/components/TeamCard";
import { useProducts } from "@/hooks/use-products";
import { useTeam } from "@/hooks/use-team";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sprout, ShieldCheck, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: team, isLoading: teamLoading } = useTeam();

  const features = [
    { icon: Sprout, title: "100% Organic", desc: "Pure natural ingredients" },
    { icon: ShieldCheck, title: "ISO Certified", desc: "9001-2015 Standards" },
    { icon: Sun, title: "Yield Boost", desc: "Enhanced productivity" },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-secondary/5 rounded-tr-[100px]" />
        </div>

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent-foreground font-semibold text-sm border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
              Revolutionizing Agriculture
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[1.1] tracking-tight text-foreground">
              Nurturing Soil, <br/> <span className="text-primary italic">Growing Life.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Shivmukha Bio Fertilizers brings you the next generation of organic soil solutions. 
              Sustainable, potent, and rooted in nature.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-lg px-10 py-7"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Products
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-2 text-lg px-10 py-7 flex items-center gap-2"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Hero Image */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white">
              {/* farm field green plants close up */}
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80" 
                alt="Healthy Crops"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-border max-w-[200px]"
            >
              <div className="text-4xl font-bold text-primary font-display mb-1">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Natural & Organic Ingredients</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Vision Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision & Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide high-quality organic fertilizers that enhance soil health and crop productivity, 
              ensuring sustainable farming for future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-muted/30 border border-border/50 text-center hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-primary shadow-lg mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Premium Bio Fertilizers</h2>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              View All Products <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {productsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[400px] rounded-2xl bg-muted animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] -z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Meet Our Directors</h2>
            <p className="text-muted-foreground">
              Guided by experienced leadership dedicated to agricultural innovation and excellence.
            </p>
          </div>

          {teamLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-64 rounded-2xl bg-muted animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {team?.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
        />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to Boost Your Yield?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to learn more about our products and how we can help you achieve sustainable growth.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="rounded-full text-primary font-bold text-lg px-8 py-6 shadow-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { TeamCard } from "@/components/TeamCard";
import { useProducts } from "@/hooks/use-products";
import { useTeam } from "@/hooks/use-team";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sprout, ShieldCheck, Sun, Phone } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
        {/* Farmer Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=1600&q=80" 
            alt="Professional farmer inspecting crops with bio-organic solution" 
            className="w-full h-full object-cover opacity-80 mix-blend-overlay scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/20" />
        </div>

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 max-w-4xl"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent text-white font-black text-[9px] uppercase tracking-[0.4em] shadow-lg shadow-accent/20 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse" />
              Revolutionizing Agriculture
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1] tracking-tighter text-white uppercase relative">
              Nurturing Soil, <br/> 
              <span className="text-accent italic">Growing Life.</span>
            </h1>
            
            <div className="space-y-6 max-w-2xl">
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                Shivmukha Bio Fertilizers brings you the next generation of organic soil solutions. 
                Sustainable, potent, and rooted in nature.
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Our mission is to empower farmers with science-backed organic fertilizers that 
                restore soil vitality and maximize harvest quality without compromising the environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button 
                size="lg" 
                className="rounded-none bg-accent hover:bg-white hover:text-primary text-white font-black text-sm px-12 py-8 uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(var(--accent),0.3)] transition-all duration-500 group relative overflow-hidden"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Products <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-none border-2 border-white/40 text-white font-black text-sm px-12 py-8 uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-sm"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Vision Section */}
      <section className="py-24 bg-white relative">
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

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">Our Competitive Edge</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Why Farmers Trust Shivmukha</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Bio-Fertility Solutions", desc: "Our products are engineered to restore the natural microbiome of your soil." },
                { title: "Sustainable Growth", desc: "We focus on long-term agricultural health rather than short-term chemical boosts." },
                { title: "Expert Support", desc: "Access to our team of agricultural scientists for personalized crop management." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-6 p-8 border border-border hover:border-accent transition-colors group">
                  <div className="w-16 h-16 bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-tight mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?w=1600&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-black font-display uppercase leading-tight tracking-tighter">Pure Science. <br/> Pure Nature.</h2>
          <div className="space-y-4 text-primary-foreground/70">
            <p className="text-lg font-medium italic">
              "The soil is the great connector of lives, the source and destination of all."
            </p>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto">
              Join thousands of successful farmers who have transitioned to Shivmukha's 
              organic solutions. Our experts are ready to assist you.
            </p>
          </div>
          <div className="pt-2 flex items-center justify-center gap-4">
            <div className="w-10 h-10 bg-accent/20 flex items-center justify-center text-accent">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black tracking-tight">+91-90572 36869</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

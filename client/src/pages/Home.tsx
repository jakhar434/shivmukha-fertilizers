import { useRef, useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { TeamCard } from "@/components/TeamCard";
import { useProducts } from "@/hooks/use-products";
import { useTeam } from "@/hooks/use-team";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Sprout, ShieldCheck, Sun, Phone, ChevronDown, Leaf, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HomeProps {
  onProductClick: (id: number) => void;
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const increment = to / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home({ onProductClick }: HomeProps) {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: team } = useTeam();

  const features = [
    { icon: Sprout, title: "100% Organic", desc: "Pure natural ingredients" },
    { icon: ShieldCheck, title: "ISO Certified", desc: "9001-2015 Standards" },
    { icon: Sun, title: "Yield Boost", desc: "Enhanced productivity" },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Farmers Served" },
    { value: 10, suffix: "+", label: "Bio Products" },
    { value: 10, suffix: "+", label: "Yrs Expertise" },
    { value: 100, suffix: "%", label: "Organic Certified" },
  ];

  const whyUs = [
    { icon: Sprout, title: "Bio-Fertility Solutions", desc: "Our products are engineered to restore the natural microbiome of your soil for lasting health." },
    { icon: Leaf, title: "Sustainable Growth", desc: "We focus on long-term agricultural health rather than short-term chemical boosts." },
    { icon: Users, title: "Expert Support", desc: "Access our team of agricultural scientists for personalized crop management guidance." },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-between pt-20 overflow-hidden bg-primary">
        {/* Farmer Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=1600&q=80"
            alt="Professional farmer inspecting crops with bio-organic solution"
            className="w-full h-full object-cover opacity-80 mix-blend-overlay scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>

        {/* Main Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center py-16">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent text-white font-black text-[9px] uppercase tracking-[0.4em] shadow-lg shadow-accent/20 border border-white/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse" />
                Revolutionizing Agriculture
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1] tracking-tighter text-white uppercase">
                Nurturing Soil, <br />
                <span className="text-accent italic">Growing Life.</span>
              </h1>

              <div className="space-y-4 max-w-2xl">
                <p className="text-lg text-white/90 leading-relaxed font-medium">
                  Shivmukha Bio Fertilizers brings you the next generation of organic soil solutions.
                  Sustainable, potent, and rooted in nature.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Our mission is to empower farmers with science-backed organic fertilizers that
                  restore soil vitality and maximize harvest quality without compromising the environment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  data-testid="button-explore-products"
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
                  data-testid="button-learn-more"
                  size="lg"
                  variant="outline"
                  className="rounded-none border-2 border-white/80 text-white font-black text-sm px-12 py-8 uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500 bg-black/40 backdrop-blur-xl"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Feature Badges — staggered slide-up */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-14 max-w-xl mx-auto">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                  className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/80 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                    <f.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-black text-[10px] sm:text-xs uppercase tracking-wide leading-tight">{f.title}</p>
                    <p className="text-white/60 text-[9px] sm:text-[10px] leading-tight mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="relative z-10 flex flex-col items-center pb-8 cursor-pointer"
          onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Counter Strip */}
      <section id="stats" className="py-12 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?w=800&q=40')] bg-cover bg-center opacity-5" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white font-display tracking-tight">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/70 text-xs uppercase tracking-widest mt-1 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Vision & Mission Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 border-l-4 border-primary bg-primary/5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary flex items-center justify-center text-white shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">Vision</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-base">
                To enhance soil fertility and agricultural productivity by delivering innovative, eco-friendly, and high-quality fertilizer solutions that empower farmers and contribute to sustainable agricultural growth and national development.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 border-l-4 border-accent bg-accent/5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-accent flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-accent">Mission</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "To provide reliable and superior quality fertilizer products to farmers.",
                  "To promote sustainable and environmentally responsible farming practices.",
                  "To ensure customer satisfaction through transparency, integrity, and dedicated service.",
                  "To support farmers with knowledge, guidance, and modern agricultural solutions.",
                  "To build long-term relationships based on trust, quality, and consistent performance.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
                <ProductCard key={product.id} product={product} index={index} onClick={() => onProductClick(product.id)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">Our Competitive Edge</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Why Farmers Trust Shivmukha</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center gap-6 p-8 border border-border hover:border-accent hover:shadow-xl transition-all duration-500 group cursor-default"
              >
                <div className="w-16 h-16 bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h4 className="font-black uppercase text-sm tracking-tight mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section id="directors" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet Our Director</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              With over 10 years of hands-on experience in agriculture and soil science, our founder leads Shivmukha with a deep passion for sustainable farming.
            </p>
          </div>
          <div className="flex justify-center">
            {team?.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Events</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Grand Office Inauguration</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              A milestone moment — the auspicious inauguration of the Shivmukha Bio Fertilizers office, 
              celebrated with blessings, community, and great pride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "images/events/event3.jpeg", caption: "Ribbon Cutting Ceremony", desc: "The grand inauguration begins with the traditional ribbon cutting." },
              { src: "images/events/event2.jpeg", caption: "Sacred Pooja Ceremony", desc: "Blessings sought for a prosperous and fruitful journey ahead." },
              { src: "images/events/event1.jpeg", caption: "Leadership & Dignitaries", desc: "Distinguished guests and leaders gracing the inaugural occasion." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group overflow-hidden border border-border hover:border-primary hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5 bg-white">
                  <h4 className="font-black uppercase text-sm tracking-tight text-primary mb-1">{item.caption}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?w=1600&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-display uppercase leading-tight tracking-tighter"
          >
            Pure Science. <br /> Pure Nature.
          </motion.h2>
          <div className="space-y-4 text-primary-foreground/70">
            <p className="text-lg font-medium italic">
              "The soil is the great connector of lives, the source and destination of all."
            </p>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto">
              Join thousands of successful farmers who have transitioned to Shivmukha's
              organic solutions. Our experts are ready to assist you.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+916367119368"
              data-testid="link-phone"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-accent/20 flex items-center justify-center text-accent">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black tracking-tight">+91-63671 19368</div>
            </a>
            <a
              href="https://wa.me/919057236869?text=Hello%2C%20I%20am%20interested%20in%20Shivmukha%20Bio%20Fertilizers."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-whatsapp-cta"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919057236869?text=Hello%2C%20I%20am%20interested%20in%20Shivmukha%20Bio%20Fertilizers."
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-whatsapp-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-shadow"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
}

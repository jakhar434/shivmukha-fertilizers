import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full bg-white overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img src="images/logo-emblem.jpg" alt="Shivmukha Logo" className="w-full h-full object-contain p-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-white">
                  Shivmukha
                </span>
                <span className="text-xs text-white/60 font-medium tracking-wider uppercase">
                  Bio Fertilizers
                </span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Enhancing soil health and crop productivity through sustainable,
              high-quality organic solutions. ISO 9001-2015 Certified.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-display text-lg">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "home" },
                { name: "About Us", href: "about" },
                { name: "Products", href: "products" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(item.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-white/70 hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-display text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-white/70">
                <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
                <p>
                  Shop No.7, 1st Block, Mansi Market,
                  Bhorki Road, Near Government Hospital,
                  Gudha Gorji, Todi, Jhunjhunu,
                  Rajasthan, 333022
                </p>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p>+91-63671 19368</p>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:shivmukhabio@gmail.com" className="hover:text-primary transition-colors">
                  shivmukhabio@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Shivmukha Bio Fertilizers Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

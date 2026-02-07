import Link from "next/link";
import { Droplets, Phone, MapPin, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-br from-blue-600 to-green-600 p-2.5 rounded-xl shadow-lg">
                  <Droplets className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl">Rwamu</h3>
                <p className="text-xs text-blue-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Cleaning Solutions
                </p>
              </div>
            </div>
            <p className="text-blue-100 text-sm italic flex items-center gap-2">
              <Heart className="w-4 h-4 text-green-400" />
              "Let's keep our environment clean"
            </p>
            <p className="text-blue-200 text-sm leading-relaxed">
              Premium liquid cleaning solutions for homes and businesses across Rwanda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-green-400 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-green-400 rounded-full" />
              Our Products
            </h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              {[
                "Floor & Mopping Liquid",
                "Toilet Cleaner",
                "Dishwashing Liquid",
                "Surface Cleaner",
                "Glass Cleaner",
                "Laundry Detergent",
              ].map((product) => (
                <li key={product} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-green-400 rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                </div>
                <span className="text-blue-200 text-sm leading-relaxed">
                  Kigali – Gasabo, Rwanda
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                </div>
                <div className="text-blue-200 text-sm space-y-1">
                  <a
                    href="tel:+250787676675"
                    className="hover:text-white transition-colors block"
                  >
                    +250 787 676 675
                  </a>
                  <a
                    href="tel:+250725482196"
                    className="hover:text-white transition-colors block"
                  >
                    +250 725 482 196
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Rwamu Cleaning Soap Products. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <span>Made in Rwanda</span>
              <span className="text-2xl">🇷🇼</span>
              <span>with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

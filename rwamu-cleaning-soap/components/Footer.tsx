import Link from "next/link";
import { Droplets, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Rwamu</h3>
                <p className="text-xs text-blue-200">Cleaning Solutions</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm italic">
              "Let's keep our environment clean"
            </p>
            <p className="text-blue-200 text-sm">
              Premium liquid cleaning solutions for homes and businesses across Rwanda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>Floor & Mopping Liquid</li>
              <li>Toilet Cleaner</li>
              <li>Dishwashing Liquid</li>
              <li>Surface Cleaner</li>
              <li>Glass Cleaner</li>
              <li>Laundry Detergent</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm">
                  Kigali – Gasabo, Rwanda
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div className="text-blue-200 text-sm">
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

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Rwamu Cleaning Soap Products. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs mt-2">
            Made in Rwanda with care for your home and environment
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Clean?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Contact us today for bulk orders, wholesale pricing, or product inquiries.
              We're here to serve homes and businesses across Rwanda.
            </p>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <motion.a
                href="tel:+250787676675"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-sm text-gray-600">Call us now</p>
                  <p className="font-bold text-lg">+250 787 676 675</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/250787676675"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-sm text-green-100">WhatsApp us</p>
                  <p className="font-bold text-lg">+250 787 676 675</p>
                </div>
              </motion.a>
            </div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Visit Contact Page</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Additional Contact */}
            <p className="text-blue-100 mt-8">
              Alternative: <a href="tel:+250725482196" className="font-semibold hover:text-white transition-colors">+250 725 482 196</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Factory, Leaf } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">Rwamu</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 mb-8">
              Your trusted partner in premium liquid cleaning solutions, proudly serving Rwanda since our inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Rwamu Cleaning Soap Products was founded with a simple yet powerful vision: to provide Rwandan homes 
                and businesses with high-quality, affordable cleaning solutions that are both effective and environmentally responsible.
              </p>
              <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Based in Kigali – Gasabo, we have grown from a small local manufacturer to a trusted name in liquid 
                cleaning products across Rwanda. Our commitment to quality, affordability, and environmental stewardship 
                has made us the preferred choice for households and businesses alike.
              </p>
              <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed">
                Every product we create is manufactured with care, using formulas that deliver professional cleaning 
                results while being safe for your family and the environment. We take pride in being a Rwandan company 
                that contributes to our local economy and supports our community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-xl italic text-blue-600 dark:text-blue-400 mb-4">"Let's keep our environment clean"</p>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                To provide premium liquid cleaning solutions that are effective, affordable, and environmentally 
                responsible, while supporting the growth and development of Rwanda's manufacturing sector.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl"
            >
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                To become Rwanda's leading manufacturer of liquid cleaning products, recognized for our commitment 
                to quality, innovation, and environmental sustainability. We envision a cleaner, healthier Rwanda 
                where every home and business has access to premium cleaning solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Quality First</h3>
              <p className="text-gray-600 dark:text-slate-400">
                We never compromise on quality. Every product is tested and proven to deliver exceptional cleaning results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Environmental Care</h3>
              <p className="text-gray-600 dark:text-slate-400">
                We're committed to protecting our environment through eco-friendly formulas and sustainable practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Community Focus</h3>
              <p className="text-gray-600 dark:text-slate-400">
                We support local employment and contribute to Rwanda's economic growth through local manufacturing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:via-slate-900 dark:to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Factory className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What We Do
              </h2>
              <p className="text-xl text-blue-100 dark:text-slate-300 mb-8">
                We manufacture and distribute a comprehensive range of liquid cleaning products designed for 
                homes, businesses, and institutions across Rwanda.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Product Range</h3>
                <ul className="space-y-2 text-blue-100 dark:text-slate-300">
                  <li>• Floor & Mopping Liquid</li>
                  <li>• Toilet Cleaner</li>
                  <li>• Dishwashing Liquid</li>
                  <li>• General Surface Cleaner</li>
                  <li>• Glass & Window Cleaner</li>
                  <li>• Liquid Laundry Detergent</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Available Sizes</h3>
                <ul className="space-y-2 text-blue-100 dark:text-slate-300">
                  <li>• 1 Liter - Perfect for households</li>
                  <li>• 5 Liters - Great for regular use</li>
                  <li>• 25 Liters - Ideal for businesses</li>
                </ul>
                <p className="mt-4 text-sm text-blue-200 dark:text-slate-400">
                  Flexible sizing options to meet the needs of every customer, from individual households to large institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

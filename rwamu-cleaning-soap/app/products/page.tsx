"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/products";
import { Package } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Complete Cleaning Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional-grade liquid cleaning solutions for every need. Available in 1L, 5L, and 25L sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Size Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Size
              </h2>
              <p className="text-xl text-gray-600">
                We offer flexible sizing options to meet your specific needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-3">1L</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Household</h3>
                <p className="text-gray-600">
                  Perfect for individual households and small families. Easy to handle and store.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-xl text-center transform scale-105"
              >
                <div className="text-5xl font-bold text-white mb-3">5L</div>
                <h3 className="text-xl font-bold text-white mb-2">Most Popular</h3>
                <p className="text-blue-100">
                  Great value for regular use. Ideal for larger families and small businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-3">25L</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial</h3>
                <p className="text-gray-600">
                  Best value for businesses, hotels, schools, and institutions. Bulk pricing available.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-12 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Our Products?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Professional Grade</h3>
                    <p className="text-gray-600 text-sm">
                      Formulated to deliver commercial-quality cleaning results
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Eco-Friendly</h3>
                    <p className="text-gray-600 text-sm">
                      Safe for your family and the environment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Made in Rwanda</h3>
                    <p className="text-gray-600 text-sm">
                      Supporting local manufacturing and economy
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Affordable Pricing</h3>
                    <p className="text-gray-600 text-sm">
                      Premium quality at competitive prices
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tested & Proven</h3>
                    <p className="text-gray-600 text-sm">
                      Trusted by homes and businesses across Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Multiple Sizes</h3>
                    <p className="text-gray-600 text-sm">
                      Flexible options for every need and budget
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

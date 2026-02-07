"use client";

import { motion } from "framer-motion";
import { Droplets, Sparkles, UtensilsCrossed, SprayCan, Square, Shirt, Check } from "lucide-react";
import type { Product } from "@/lib/products";

const iconMap = {
  droplets: Droplets,
  sparkles: Sparkles,
  utensils: UtensilsCrossed,
  "spray-can": SprayCan,
  square: Square,
  shirt: Shirt,
};

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const Icon = iconMap[product.icon as keyof typeof iconMap] || Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Icon Header */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200/20 rounded-full -ml-12 -mb-12" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-blue-600 font-medium mb-3">
          {product.usage}
        </p>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        {/* Sizes */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-500 mb-2 font-medium">Available Sizes:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

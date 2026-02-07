"use client";

import { motion } from "framer-motion";
import { Droplets, Sparkles, UtensilsCrossed, SprayCan, Square, Shirt, Check, Star } from "lucide-react";
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
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative glass rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
        {/* Icon Header with gradient background */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-800 dark:via-blue-900/30 dark:to-slate-800 p-8 overflow-hidden">
          {/* Animated background circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 dark:bg-blue-500/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400/10 dark:bg-green-500/20 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
          
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-green-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Popular badge for first product */}
          {index === 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
            >
              <Star className="w-3 h-3 fill-white" />
              Popular
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {product.name}
            </h3>
            
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
              <Sparkles className="w-3 h-3" />
              {product.usage}
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-2"
              >
                <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mt-0.5">
                  <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Sizes */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wide">
              Available Sizes
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <motion.span
                  key={size}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-bold border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer"
                >
                  {size}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/products";
import { CheckCircle, Leaf, DollarSign, Award, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">Most Popular</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover our most popular liquid cleaning solutions, trusted by homes and businesses across Rwanda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products" className="group inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
              >
                <span>View All Products</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Why Choose Us</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose <span className="gradient-text">Rwamu?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We're committed to providing the best cleaning solutions while supporting our local community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Locally Made",
                desc: "Proudly manufactured in Rwanda, supporting local economy and creating jobs in our community.",
                color: "blue",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                desc: "Environmentally conscious formulas that are safe for your family and our planet.",
                color: "green",
                gradient: "from-green-500 to-green-600",
              },
              {
                icon: DollarSign,
                title: "Affordable",
                desc: "Premium quality at competitive prices. Available in multiple sizes to fit your budget.",
                color: "blue",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Award,
                title: "Effective",
                desc: "Powerful cleaning formulas that deliver professional results every time.",
                color: "green",
                gradient: "from-green-500 to-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative glass p-8 rounded-3xl hover:shadow-2xl transition-all duration-300">
                  <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full mb-6 shadow-lg"
            >
              <Award className="w-5 h-5" />
              <span className="text-sm font-bold">Meet Our Team</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              The People Behind <span className="gradient-text">Rwamu</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Passionate professionals dedicated to delivering excellence in every bottle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                name: "Ishimwe Diane",
                role: "Chief Executive Officer",
                desc: "Visionary leader driving innovation and growth in Rwanda's cleaning industry",
                image: "/profiles/diane.jpg",
                color: "from-blue-500 to-purple-600",
                bgColor: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
              },
              {
                name: "Mugisha Pacifique",
                role: "Operations Manager",
                desc: "Expert in streamlining processes and ensuring top-quality production standards",
                image: "/profiles/pacifique.jpg",
                color: "from-green-500 to-teal-600",
                bgColor: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
              },
              {
                name: "Mbabazi Christopher",
                role: "Business Development Director",
                desc: "Building lasting partnerships and expanding our reach across Rwanda",
                image: "/profiles/chris.jpg",
                color: "from-orange-500 to-red-600",
                bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${member.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                
                {/* Card */}
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative bg-gradient-to-br ${member.bgColor} backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-slate-700/50`}
                >
                  {/* Image container with overlay */}
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback gradient design if image doesn't exist
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.classList.add('flex', 'items-center', 'justify-center');
                          const fallback = document.createElement('div');
                          fallback.className = `w-48 h-48 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-2xl`;
                          fallback.innerHTML = `<span class="text-7xl font-bold text-white">${member.name.split(' ').map((n: string) => n[0]).join('')}</span>`;
                          parent.insertBefore(fallback, parent.firstChild);
                        }
                      }}
                    />
                    
                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold text-white mb-1"
                      >
                        {member.name}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`inline-block bg-gradient-to-r ${member.color} text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg`}
                      >
                        {member.role}
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                      {member.desc}
                    </p>
                    
                    {/* Decorative line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className={`h-1 bg-gradient-to-r ${member.color} rounded-full mt-6 mx-auto`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Want to join our amazing team?
            </p>
            <Link href="/contact" className="group inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-900 dark:via-slate-900 dark:to-blue-950 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="relative"
                >
                  <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Our Mission
                  </h2>
                  <p className="text-3xl md:text-4xl italic font-light mb-8 text-blue-100">
                    "Let's keep our environment clean"
                  </p>
                  <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    At Rwamu Cleaning Soap Products, we believe that a clean environment starts with quality cleaning products. 
                    We're dedicated to providing effective, affordable, and eco-friendly solutions that make cleaning easier 
                    while protecting our beautiful Rwanda.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

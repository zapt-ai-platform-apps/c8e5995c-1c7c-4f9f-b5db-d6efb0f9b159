import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiUsers } from 'react-icons/hi';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/common/ProductCard';
import { coBuyProducts } from '@/data/products';

export default function CoBuyingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            title="Co-Buying Opportunities"
            subtitle="Join other food enthusiasts and save up to 40% on premium products by buying together."
            center={false}
          />
          
          <Link 
            to="/co-buying" 
            className="group flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors"
          >
            View all co-buying deals
            <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {coBuyProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/co-buying"
            className="btn btn-accent cursor-pointer inline-flex items-center"
          >
            <HiUsers className="mr-2" />
            Join Co-Buying
          </Link>
        </div>
      </div>
    </section>
  );
}
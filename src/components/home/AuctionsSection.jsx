import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/common/ProductCard';
import { auctionProducts } from '@/data/products';

export default function AuctionsSection() {
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
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            title="Live Auctions"
            subtitle="Bid on our exclusive selection of premium food products. New auctions daily!"
            center={false}
          />
          
          <Link 
            to="/auctions" 
            className="group flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            View all auctions
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
          {auctionProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/auctions"
            className="btn btn-primary cursor-pointer inline-flex items-center"
          >
            Browse All Auctions
            <HiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
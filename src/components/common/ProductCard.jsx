import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiClock, HiUsers, HiOutlineHeart } from 'react-icons/hi';

export default function ProductCard({ product, variant = 'default' }) {
  const isAuction = product.type === 'auction';
  const isCoBuy = product.type === 'co-buy';
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="card group h-full flex flex-col"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHxvdmVyaGVhZCUyMHNob3QlMjBvZiUyMHByZW1pdW0lMjBhcnRpc2FuYWwlMjBmb29kJTIwaW5ncmVkaWVudHMlMjB3aXRoJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3NDIyMDE3NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" 
            src={product.image} 
            alt={product.name} 
            className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
          />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl text-white mb-6">
              Discover Exceptional Food at Exceptional Prices
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              GhostChef brings you premium culinary experiences through innovative auctions and co-buying opportunities. Join our food-loving community today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                to="/auctions" 
                variant="primary" 
                size="lg"
                icon={<HiClock />}
                iconPosition="left"
              >
                Live Auctions
              </Button>
              <Button 
                to="/co-buying" 
                variant="secondary" 
                size="lg"
                icon={<HiUsers />}
                iconPosition="left"
              >
                Join Co-Buying
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <p className="text-white/80 text-sm mb-1">{stat.label}</p>
                    <p className="text-white text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-white/70 text-xs flex items-center">
                      <span className={`mr-1 ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.trend === 'up' ? '↑' : '↓'} 
                      </span>
                      {stat.change} this week
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-medium">Featured Auction</h3>
                    <Button 
                      to="/product/featured-auction"
                      variant="accent"
                      size="sm"
                      icon={<HiArrowRight />}
                      iconPosition="right"
                    >
                      Bid Now
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1531857414472-edf16a1bb78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwYmxhY2slMjB0cnVmZmxlcyUyMGVsZWdhbnRseSUyMGFycmFuZ2VkJTIwb24lMjBhJTIwZGFyayUyMHBsYXRlfGVufDB8fHx8MTc0MjIwMTc0Nnww&ixlib=rb-4.0.3&q=80&w=1080" 
                         
                        alt="Truffle Collection"
                        className="w-full h-full object-cover"
                        data-image-request="premium black truffles elegantly arranged on a dark plate"
                      />
                    </div>
                    <div>
                      <h4 className="text-white">Premium Truffle Collection</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-white/80 text-sm">Current bid:</span>
                        <span className="text-white font-semibold">$89.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const heroStats = [
  { label: 'Active Auctions', value: '24', trend: 'up', change: '12%' },
  { label: 'Co-Buy Savings', value: '35%', trend: 'up', change: '8%' },
  { label: 'Members', value: '2.4k', trend: 'up', change: '15%' },
  { label: 'Products', value: '120+', trend: 'up', change: '5%' },
];
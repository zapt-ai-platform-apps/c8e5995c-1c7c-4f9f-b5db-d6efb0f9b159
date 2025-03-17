import React from 'react';
import { motion } from 'framer-motion';
import { HiClock, HiUsers, HiCurrencyDollar, HiTruck } from 'react-icons/hi';
import SectionHeading from '@/components/common/SectionHeading';

export default function HowItWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container-custom">
        <SectionHeading
          title="How GhostChef Works"
          subtitle="Discover our innovative approaches to bringing you premium food products at incredible values."
          center={true}
          light={true}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            variants={itemVariants}
          >
            <div className="flex items-start">
              <div className="mr-6 p-3 bg-primary-700 rounded-lg">
                <HiClock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Instant Auctions</h3>
                <p className="text-white/80 mb-4">
                  Bid on exclusive premium food products in our timed auctions. New auctions start daily with limited quantities available.
                </p>
                <ul className="space-y-2">
                  {auctionSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-primary-600 rounded-full mr-2 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-white/90">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            variants={itemVariants}
          >
            <div className="flex items-start">
              <div className="mr-6 p-3 bg-primary-700 rounded-lg">
                <HiUsers className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Co-Buying</h3>
                <p className="text-white/80 mb-4">
                  Join other food enthusiasts to unlock bulk discounts. The more people who join, the greater the savings for everyone.
                </p>
                <ul className="space-y-2">
                  {coBuySteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-primary-600 rounded-full mr-2 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-white/90">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white/20 rounded-full mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
              <p className="text-white/80 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const auctionSteps = [
  "Browse active auctions and select items you're interested in",
  "Place your bid before the auction timer ends",
  "If you win, pay the final bid price and receive your premium product"
];

const coBuySteps = [
  "Find a co-buying opportunity for a product you love",
  "Join the group and invite friends for better discounts",
  "Once the group target is reached, everyone pays and receives their items"
];

const benefits = [
  {
    title: "Premium Quality",
    description: "All products are sourced from top producers and artisans around the world",
    icon: HiCurrencyDollar
  },
  {
    title: "Transparent Pricing",
    description: "See exactly how pricing works and the savings you're receiving",
    icon: HiCurrencyDollar
  },
  {
    title: "Community Powered",
    description: "Join a community of food enthusiasts who appreciate quality",
    icon: HiUsers
  },
  {
    title: "Fast Delivery",
    description: "Quick and secure shipping for all purchased products",
    icon: HiTruck
  }
];
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiX, HiShoppingCart } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white lg:hidden"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-md text-dark-800"
                aria-label="Close menu"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="py-6 px-4 flex-grow">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => 
                        `block py-3 px-4 text-lg font-medium rounded-md ${
                          isActive 
                            ? 'bg-primary-50 text-primary-700' 
                            : 'text-dark-800 hover:bg-gray-50'
                        }`
                      }
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/cart"
                  className="flex items-center justify-between py-3 px-4 text-lg font-medium rounded-md text-dark-800 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span>Shopping Cart</span>
                  <div className="flex items-center">
                    <HiShoppingCart className="w-5 h-5 mr-2" />
                    <span className="w-6 h-6 text-sm flex items-center justify-center bg-secondary-500 text-white rounded-full">
                      0
                    </span>
                  </div>
                </Link>
              </div>
            </nav>
            
            <div className="p-4 border-t border-gray-200">
              <Link
                to="/auctions"
                className="btn btn-primary w-full justify-center mb-4"
                onClick={toggleMenu}
              >
                Live Auctions
              </Link>
              <Link
                to="/co-buying"
                className="btn btn-secondary w-full justify-center"
                onClick={toggleMenu}
              >
                Co-Buying Deals
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Auctions', path: '/auctions' },
  { label: 'Co-Buying', path: '/co-buying' },
  { label: 'About', path: '/about' },
];
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiHome } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary inline-flex items-center cursor-pointer">
              <HiHome className="mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
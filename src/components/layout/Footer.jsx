import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import Logo from '@/components/common/Logo';

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo dark={false} />
            <p className="mt-4 text-gray-400 max-w-xs">
              Revolutionizing premium food shopping through instant auctions and intelligent co-buying.
            </p>
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md flex-grow text-dark-900 focus:outline-none box-border"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 px-4 rounded-r-md font-medium hover:bg-primary-700 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GhostChef. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: FaFacebook },
  { name: 'Twitter', href: 'https://twitter.com', icon: FaTwitter },
  { name: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  { name: 'Pinterest', href: 'https://pinterest.com', icon: FaPinterest },
];

const shopLinks = [
  { label: 'All Products', path: '/products' },
  { label: 'Live Auctions', path: '/auctions' },
  { label: 'Co-Buying Deals', path: '/co-buying' },
  { label: 'Gift Cards', path: '/gift-cards' },
];

const aboutLinks = [
  { label: 'Our Story', path: '/about' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
];

const legalLinks = [
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Shipping Policy', path: '/shipping' },
  { label: 'Refund Policy', path: '/refund' },
];
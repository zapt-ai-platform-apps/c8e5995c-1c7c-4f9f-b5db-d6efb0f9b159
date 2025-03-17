import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX, HiShoppingCart, HiSearch } from 'react-icons/hi';
import Logo from '@/components/common/Logo';

export default function Header({ isScrolled, isMobileMenuOpen, toggleMobileMenu }) {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="relative z-10">
            <Logo dark={isScrolled} />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? (isActive ? 'text-primary-600' : 'text-dark-800 hover:text-primary-600') 
                      : (isActive ? 'text-white font-semibold' : 'text-white/90 hover:text-white')
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'text-dark-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Search"
          >
            <HiSearch className="w-5 h-5" />
          </button>
          
          <Link 
            to="/cart" 
            className={`p-2 rounded-full transition-colors relative ${
              isScrolled ? 'text-dark-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Cart"
          >
            <HiShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center bg-secondary-500 text-white rounded-full">
              0
            </span>
          </Link>
          
          <Link 
            to="/auctions" 
            className={`btn btn-sm ${
              isScrolled ? 'btn-primary' : 'bg-white/10 text-white hover:bg-white/20 border-0'
            }`}
          >
            Live Auctions
          </Link>
        </div>
        
        <button
          className={`lg:hidden p-2 rounded-md ${
            isScrolled ? 'text-dark-800' : 'text-white'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Auctions', path: '/auctions' },
  { label: 'Co-Buying', path: '/co-buying' },
  { label: 'About', path: '/about' },
];
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetail';
import ActiveAuctions from '@/pages/ActiveAuctions';
import CoBuyingDeals from '@/pages/CoBuyingDeals';
import Cart from '@/pages/Cart';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="auctions" element={<ActiveAuctions />} />
          <Route path="co-buying" element={<CoBuyingDeals />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="zapt-badge">
        Made on ZAPT
      </a>
    </div>
  );
}
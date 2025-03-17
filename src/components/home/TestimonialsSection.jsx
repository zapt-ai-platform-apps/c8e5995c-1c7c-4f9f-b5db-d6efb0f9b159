import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Join thousands of satisfied customers who have discovered premium food through GhostChef."
          center={true}
        />
        
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-soft mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-primary-100">
                      <img src="https://images.unsplash.com/photo-1483918793747-5adbf82956c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxlbGVnYW50JTIwYXJyYW5nZW1lbnQlMjBvZiUyMHByZW1pdW0lMjBmb29kJTIwcHJvZHVjdHMlMjBvbiUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwd2l0aCUyMGRyYW1hdGljJTIwbGlnaHRpbmd8ZW58MHx8fHwxNzQyMjAxNzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
          </div>
          
          <div className="relative z-10 py-16 px-8 md:p-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="badge badge-primary mb-4">Limited Time Offer</span>
                <h2 className="heading-lg text-white mb-6">
                  Get $20 Off Your First Purchase
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Join GhostChef today and receive a $20 credit towards your first purchase. 
                  Discover the excitement of food auctions and the savings of co-buying.
                </p>
                
                <Link 
                  to="/auctions" 
                  className="btn btn-primary btn-lg inline-flex items-center cursor-pointer"
                >
                  Start Exploring
                  <HiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
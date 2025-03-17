import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiClock, HiUsers, HiOutlineHeart, HiOutlineShare } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { allProducts } from '@/data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [bidAmount, setBidAmount] = useState('');

  useEffect(() => {
    // Simulate fetching product details
    const foundProduct = allProducts.find(p => p.id === id) || allProducts[0];
    
    setTimeout(() => {
      setProduct(foundProduct);
      setLoading(false);
      
      // Set initial bid amount if auction
      if (foundProduct.type === 'auction') {
        setBidAmount((foundProduct.currentBid + 5).toFixed(2));
      }
    }, 500);
  }, [id]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    alert(`Your bid of $${bidAmount} has been placed!`);
  };

  const handleCoJoin = () => {
    alert('You have successfully joined this co-buying opportunity!');
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-t-transparent border-primary-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="py-4">
          <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors flex items-center">
            <HiArrowLeft className="mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/34/rcaNUh3pQ9GD8w7Iy8qE__DSC0940.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwb2YlMjBjdWxpbmFyeSUyMGV4cGVydHMlMjBleGFtaW5pbmclMjBhbmQlMjBzZWxlY3RpbmclMjBoaWdoJTIwcXVhbGl0eSUyMGZvb2QlMjBwcm9kdWN0cyUyMGluJTIwYSUyMHByb2Zlc3Npb25hbCUyMHNldHRpbmd8ZW58MHx8fHwxNzQyMjAxNzQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="A passionate group of food enthusiasts and technology innovators"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-4">{member.role}</p>
                <p className="text-gray-600 max-w-xs mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Join the GhostChef Community</h2>
              <p className="text-xl text-white/90 mb-8">
                Be part of the food revolution. Discover exceptional products, connect with other enthusiasts, and experience premium food in a whole new way.
              </p>
              <a 
                href="#" 
                className="btn btn-accent btn-lg inline-flex items-center cursor-pointer"
              >
                Explore Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality. Every product on our platform meets our stringent standards for excellence.",
    icon: HiLightningBolt
  },
  {
    title: "Transparency",
    description: "We believe in complete transparency in sourcing, pricing, and business practices.",
    icon: HiGlobeAlt
  },
  {
    title: "Community",
    description: "We're building a community of food lovers who share our passion for exceptional culinary experiences.",
    icon: HiUserGroup
  },
  {
    title: "Innovation",
    description: "We're constantly exploring new ways to make premium food more accessible and exciting.",
    icon: HiClock
  }
];

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "Former chef with a passion for making fine dining accessible to everyone. Alex started GhostChef after seeing too many amazing food products fail to reach consumers.",
    image: "PLACEHOLDER",
    "data-image-request": "professional headshot of male CEO in his 30s with a confident smile"
  },
  {
    name: "Sophia Chen",
    role: "Head of Culinary Partnerships",
    bio: "With 15 years in the specialty food industry, Sophia builds relationships with the world's best producers to bring their products to our platform.",
    image: "PLACEHOLDER",
    "data-image-request": "professional headshot of woman in her 40s with Asian features and a friendly smile"
  },
  {
    name: "Marcus Johnson",
    role: "Chief Technology Officer",
    bio: "Tech innovator who designed our auction and co-buying systems. Marcus ensures that our platform delivers a seamless experience for all users.",
    image: "PLACEHOLDER",
    "data-image-request": "professional headshot of African American man in his 30s with glasses and a technical background"
  }
];
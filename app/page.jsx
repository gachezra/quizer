'use client';

import { motion } from 'framer-motion';
import { FaVideo, FaClipboardList, FaMoneyBillWave, FaArrowRight, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const router = useRouter();
  const { user } = useAuth();
  
  const handleGetStarted = () => {
    if (user) {
      router.push('/quiz');
    } else {
      router.push('/signup');
    }
  };
  
  const features = [
    {
      icon: <FaVideo className="text-4xl text-primary-500" />,
      title: "Watch Videos",
      description: "Watch 18 second videos daily and earn income that you can withdraw at the click of a button. It never gets easier than that."
    },
    {
      icon: <FaClipboardList className="text-4xl text-primary-500" />,
      title: "Complete Surveys",
      description: "Complete simple surveys and unlock income that is credited directly to your account."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary-500" />,
      title: "Earn Daily Income",
      description: "Establish a stable source of daily income with flexible tasks that fit into your schedule."
    }
  ];
  
  const testimonials = [
    {
      name: "Emmanuel Olatunji",
      role: "Student, Lagos",
      content: "Alsidue Africa helped me earn extra income while studying. The video tasks are quick and the payment system is reliable!"
    },
    {
      name: "Amina Kebe",
      role: "Entrepreneur, Nairobi",
      content: "I complete surveys between business meetings and earn consistently. Alsidue has become an essential part of my income."
    },
    {
      name: "David Mwangi",
      role: "Teacher, Kampala",
      content: "As an educator with free time between classes, this platform has been perfect for supplementing my income."
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      {/* Navigation */}
      <motion.nav 
        className="flex justify-between items-center py-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary-600">Alsidue Africa</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="flex items-center px-4 py-2 rounded bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 transition">
            <FaSignInAlt className="mr-2" /> Login
          </Link>
          <Link href="/signup" className="flex items-center px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700 transition">
            <FaUserPlus className="mr-2" /> Sign Up
          </Link>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <motion.div 
        className="text-center py-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-5xl sm:text-6xl font-bold text-primary-600 mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Path to Daily Income
        </motion.h1>
        <div className="bg-gray-200 w-80 h-32 mx-auto mb-6 rounded-xl flex items-center justify-center">
          <img src='/assets/logo.png' width={72} height={28} alt='logo' />
        </div>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8">
          Empowering Africans with simple tasks that generate stable daily income.
        </p>
        <button 
          onClick={handleGetStarted} 
          className="px-8 py-3 text-lg flex items-center mx-auto bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
        >
          Get Started <FaArrowRight className="ml-2" />
        </button>
      </motion.div>
      
      {/* About Section */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Alsidue Africa</h2>
        <div className="bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            Alsidue Africa is a digital platform established to empower people in Africa to have a stable source of daily income by doing simple tasks like completing surveys and watching videos.
          </p>
          <p className="text-lg text-gray-700">
            The parent company Dentzu & Barats Advertising Ireland established the subsidiary Alsidue Africa with the ambitious aim of creating <span className="font-bold text-primary-600">5 million jobs by 2028</span>.
          </p>
        </div>
      </motion.section>
      
      {/* Features Section */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How You Earn With Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white shadow-lg rounded-lg text-center p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Testimonials Section */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.7 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Statistics Section */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="bg-primary-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-600">5M</p>
              <p className="text-gray-700">Jobs by 2028</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600">30+</p>
              <p className="text-gray-700">African Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600">100K+</p>
              <p className="text-gray-700">Active Earners</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="bg-white shadow-xl rounded-lg max-w-3xl mx-auto p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Ready to earn daily income?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of Africans who are securing their financial future with Alsidue.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-3 text-lg flex items-center justify-center bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">
              Sign Up Now <FaArrowRight className="ml-2" />
            </Link>
            <Link href="/learn-more" className="px-8 py-3 text-lg flex items-center justify-center border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition">
              Learn More
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
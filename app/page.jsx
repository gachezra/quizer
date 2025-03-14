'use client';

import { motion } from 'framer-motion';
import { FaPlayCircle, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';

export default function AlsidueLandingPage() {
  const router = useRouter();
  const { user } = useAuth();

  const handleAuthRedirect = (path) => {
    router.push(path);
  };

  const features = [
    {
      icon: <FaPlayCircle className="text-4xl text-primary-500" />, 
      title: "Watch & Earn", 
      description: "Watch short 18-second videos daily and earn money instantly, withdrawable at the click of a button."
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-primary-500" />, 
      title: "Complete Surveys", 
      description: "Answer simple surveys and get rewarded with income credited directly to your account."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div className="text-center py-16 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Image src="/assets/logo.png" alt="Alsidue Africa Logo" width={40} height={40} />
        <h1 className="text-5xl sm:text-6xl font-bold text-primary-600 mb-6">Alsidue Africa</h1>
        <p className="text-xl sm:text-2xl text-background-700 mb-8">
          Empowering Africa with stable daily income through simple digital tasks.
        </p>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => handleAuthRedirect('/login')} className="px-6 py-3 text-lg flex items-center">
            <FaSignInAlt className="mr-2" /> Login
          </Button>
          <Button onClick={() => handleAuthRedirect('/signup')} className="px-6 py-3 text-lg flex items-center bg-secondary-500 text-white">
            <FaUserPlus className="mr-2" /> Sign Up
          </Button>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section className="py-12 text-center max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <h2 className="text-3xl font-bold text-background-800 mb-6">About Us</h2>
        <p className="text-lg text-background-600">
          Alsidue Africa is a digital platform founded by Dentzu & Barats Advertising Ireland, aiming to create 5 million jobs in Africa by 2028. Earn a stable income daily by completing simple tasks such as watching videos and taking surveys.
        </p>
      </motion.section>

      {/* Features Section */}
      <motion.section className="py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
        <h2 className="text-3xl font-bold text-center text-background-800 mb-12">How You Earn</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} className="card text-center p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}>
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-background-800 mb-3">{feature.title}</h3>
              <p className="text-background-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-16 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
        <div className="card max-w-3xl mx-auto p-8 bg-primary-50 items-center justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-background-800 mb-4">Start Earning Today</h2>
          <p className="text-lg text-background-600 mb-8">Join thousands of Africans earning a stable daily income with Alsidue Africa.</p>
          <Button onClick={() => handleAuthRedirect('/signup')} className="px-8 py-3 text-lg flex items-center bg-secondary-500 text-white">
            <FaUserPlus className="mr-2" /> Sign Up Now
          </Button>
        </div>
      </motion.section>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function StarAnimation({ count = 1, onComplete }) {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Create array of stars
    const starArray = Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: i * 0.5, // Stagger animation
      x: Math.random() * 200 - 100, // Random X position
      y: Math.random() * -100 - 50, // Random Y position from top
      rotation: Math.random() * 360 // Random rotation
    }));
    
    setStars(starArray);
    
    // Call onComplete after all stars have appeared
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, count * 500 + 1000);
    
    return () => clearTimeout(timer);
  }, [count, onComplete]);
  
  return (
    <div className="relative h-40 w-full overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute left-1/2 top-full"
          initial={{ scale: 0, y: 0, x: "-50%", rotate: 0 }}
          animate={{ 
            scale: [0, 1.5, 1],
            y: [0, star.y - 100],
            x: [`-50%`, `calc(-50% + ${star.x}px)`],
            rotate: [0, star.rotation]
          }}
          transition={{ 
            duration: 1.5,
            delay: star.delay,
            ease: "backOut"
          }}
        >
          <FaStar className="text-yellow-400 text-4xl" />
        </motion.div>
      ))}
    </div>
  );
}
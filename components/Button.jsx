'use client';

import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  className = '',
  ...props 
}) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  const handleClick = (e) => {
    console.log('Button clicked:', children);
    if (onClick) onClick(e);
  };
  
  return (
    <motion.button
      className={`${baseClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
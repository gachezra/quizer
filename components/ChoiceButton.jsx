'use client';

import { motion } from 'framer-motion';

export default function ChoiceButton({ 
  children, 
  onClick, 
  selected = false,
  correct = null,
  disabled = false,
  index,
  ...props 
}) {
  // Determine status class based on selection and correctness
  let statusClass = 'choice-btn-default';
  
  if (correct === true) {
    statusClass = 'choice-btn-correct';
  } else if (correct === false) {
    statusClass = 'choice-btn-incorrect';
  } else if (selected) {
    statusClass = 'choice-btn-selected';
  }

  // Generate letter for choice (A, B, C, D)
  const letter = String.fromCharCode(65 + index);
  
  return (
    <motion.button
      className={`choice-btn ${statusClass} ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={!disabled ? { scale: 1.01, x: 5 } : {}}
      {...props}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-background-100 flex items-center justify-center mr-3 font-semibold">
          {letter}
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </motion.button>
  );
}
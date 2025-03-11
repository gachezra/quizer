'use client';

import { motion } from 'framer-motion';

export default function ProgressBar({ 
  value, 
  max, 
  label,
  type = 'default',
  showLabel = true
}) {
  const percentage = Math.round((value / max) * 100);
  
  // Determine color based on type and percentage
  let barColor;
  if (type === 'time') {
    barColor = percentage > 50 ? 'bg-green-500' : 
               percentage > 25 ? 'bg-yellow-500' : 
               'bg-red-500';
  } else {
    barColor = 'bg-primary-500';
  }
  
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-1 text-sm">
          <span>{label}</span>
          <span>{value}/{max}</span>
        </div>
      )}
      <div className="w-full h-3 bg-background-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${barColor} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
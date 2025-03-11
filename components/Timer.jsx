'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../context/QuizContext';
import useTimer from '../hooks/useTimer';

export default function Timer() {
  const { initialTime, handleTimeExpired, updateTimeRemaining } = useQuiz();
  
  const { 
    timeRemaining, 
    percentRemaining, 
    formattedTime, 
    isActive, 
    startTimer 
  } = useTimer(initialTime, handleTimeExpired);
  
  // Start timer when component mounts
  useEffect(() => {
    startTimer();
  }, [startTimer]);
  
  // Update time remaining in quiz context
  useEffect(() => {
    updateTimeRemaining(timeRemaining);
  }, [timeRemaining, updateTimeRemaining]);
  
  // Determine color based on time remaining
  const getTimerColor = () => {
    if (percentRemaining > 50) return 'text-green-600';
    if (percentRemaining > 25) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  // Pulse animation when time is running low
  const shouldPulse = percentRemaining < 25 && isActive;
  
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className={`text-2xl font-bold ${getTimerColor()}`}
        animate={shouldPulse ? { scale: [1, 1.05, 1] } : {}}
        transition={shouldPulse ? { repeat: Infinity, duration: 1 } : {}}
      >
        {formattedTime}
      </motion.div>
      <div className="w-full mt-2 h-2 bg-background-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            percentRemaining > 50 ? 'bg-green-500' : 
            percentRemaining > 25 ? 'bg-yellow-500' : 
            'bg-red-500'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: `${percentRemaining}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </div>
  );
}
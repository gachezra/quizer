import { useState, useEffect, useCallback } from 'react';

export default function useTimer(initialTime, onComplete) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Calculate percentage of time remaining
  const percentRemaining = Math.floor((timeRemaining / initialTime) * 100);
  
  // Format time as MM:SS
  const formatTime = useCallback(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [timeRemaining]);
  
  // Timer controls
  const startTimer = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);
  
  const pauseTimer = useCallback(() => {
    setIsPaused(true);
  }, []);
  
  const resumeTimer = useCallback(() => {
    setIsPaused(false);
  }, []);
  
  const resetTimer = useCallback(() => {
    setTimeRemaining(initialTime);
    setIsActive(false);
    setIsPaused(false);
  }, [initialTime]);
  
  // Timer countdown logic
  useEffect(() => {
    let interval = null;
    
    if (isActive && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsActive(false);
            if (onComplete) onComplete();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      if (onComplete) onComplete();
      setIsActive(false);
    }
    
    return () => clearInterval(interval);
  }, [isActive, isPaused, timeRemaining, onComplete]);
  
  return {
    timeRemaining,
    percentRemaining,
    isActive,
    isPaused,
    formattedTime: formatTime(),
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer
  };
}
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../context/QuizContext';
import Button from './Button';
import StarAnimation from './StarAnimation';
import { FaStar, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function Results() {
  const { 
    questions, 
    answers, 
    score, 
    stars, 
    initialTime,
    timeRemaining,
    resetQuiz 
  } = useQuiz();
  
  const [showStars, setShowStars] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Start star animation after a short delay
    const timer = setTimeout(() => {
      setShowStars(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Calculate stats
  const totalQuestions = questions.length;
  const correctAnswers = questions.filter(q => answers[q.id] === q.correctAnswer).length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const timeUsed = initialTime - timeRemaining;
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;
  
  // Get message based on score
  const getMessage = () => {
    if (percentage >= 90) return "Outstanding! You're a quiz master!";
    if (percentage >= 70) return "Great job! You know your stuff!";
    if (percentage >= 50) return "Good effort! Keep learning!";
    return "Keep practicing, you'll improve!";
  };
  
  return (
    <div className="quiz-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card text-center"
      >
        <h1 className="text-3xl font-bold text-primary-700 mb-4">Quiz Complete!</h1>
        
        {showStars && (
          <StarAnimation 
            count={stars} 
            onComplete={() => setAnimationComplete(true)} 
          />
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animationComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center mt-2 mb-6">
            {[...Array(stars)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ rotate: -30, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.5, type: "spring" }}
              >
                <FaStar className="text-yellow-400 text-4xl mx-1" />
              </motion.div>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">{getMessage()}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-background-50 p-4 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2 text-xl" />
                <span className="text-lg font-medium">Score</span>
              </div>
              <p className="text-3xl font-bold text-primary-600">{score} points</p>
              <p className="text-background-600">{percentage}% correct</p>
            </div>
            
            <div className="bg-background-50 p-4 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FaClock className="text-primary-500 mr-2 text-xl" />
                <span className="text-lg font-medium">Time</span>
              </div>
              <p className="text-3xl font-bold text-primary-600">
                {minutes}:{seconds.toString().padStart(2, '0')}
              </p>
              <p className="text-background-600">
                {Math.round((timeRemaining / initialTime) * 100)}% remaining
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-background-100 rounded-lg mb-6">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Correct: {correctAnswers}</span>
            </div>
            <div className="flex items-center">
              <FaTimesCircle className="text-red-500 mr-2" />
              <span>Incorrect: {incorrectAnswers}</span>
            </div>
          </div>
          
          <Button 
            onClick={resetQuiz} 
            className="px-8 py-3"
          >
            Try Again
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
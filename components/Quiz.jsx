'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../context/QuizContext';
import QuestionCard from './QuestionCard';
import Timer from './Timer';

export default function Quiz() {
  const { isQuizStarted, startQuiz } = useQuiz();

  useEffect(() => {
    if (!isQuizStarted) {
      startQuiz();
    }
  }, [isQuizStarted, startQuiz]);

  return (
    <div className="quiz-container">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold text-center text-primary-700 mb-2">Quiz Challenge</h1>
        <div className="max-w-xs mx-auto">
          <Timer />
        </div>
      </motion.header>
      
      <QuestionCard />
    </div>
  );
}
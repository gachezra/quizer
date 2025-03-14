'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaQuestion, FaStar } from 'react-icons/fa';
import Button from '@/components/Button';
import { useQuiz } from '@/context/QuizContext';
import { quizSettings } from '@/data/questions';

export default function SetupPage() {
  const { initQuiz, startQuiz } = useQuiz();
  const [timeInMinutes, setTimeInMinutes] = useState(quizSettings.defaultTimeInMinutes);
  const [questionsCount, setQuestionsCount] = useState(quizSettings.questionsCount);
  
  const handleStartQuiz = () => {
    initQuiz(questionsCount, timeInMinutes);
    startQuiz();
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-10">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-primary-600 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Quiz Setup
          </motion.h1>
          <p className="text-xl text-background-700">Customize your quiz experience</p>
        </div>
        
        <motion.div 
          className="card mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-background-800">Quiz Settings</h2>
          
          <div className="space-y-6 mb-8">
            <div>
              <label className="flex items-center text-lg font-medium mb-2">
                <FaClock className="mr-2 text-primary-500" />
                Time Limit (minutes)
              </label>
              <div className="flex space-x-3">
                {[10, 15, 20].map((time) => (
                  <button
                    key={time}
                    className={`py-2 px-4 rounded-md flex-1 transition-all ${
                      timeInMinutes === time 
                        ? 'bg-primary-100 border-2 border-primary-500 text-primary-700 font-medium' 
                        : 'bg-background-100 border-2 border-background-200 text-background-700'
                    }`}
                    onClick={() => setTimeInMinutes(time)}
                  >
                    {time} min
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="flex items-center text-lg font-medium mb-2">
                <FaQuestion className="mr-2 text-primary-500" />
                Number of Questions
              </label>
              <div className="flex space-x-3">
                {[5, 7, 10].map((count) => (
                  <button
                    key={count}
                    className={`py-2 px-4 rounded-md flex-1 transition-all ${
                      questionsCount === count 
                        ? 'bg-primary-100 border-2 border-primary-500 text-primary-700 font-medium' 
                        : 'bg-background-100 border-2 border-background-200 text-background-700'
                    }`}
                    onClick={() => setQuestionsCount(count)}
                  >
                    {count} questions
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center p-4 rounded-lg bg-primary-50 border border-primary-100 mb-6">
            <FaStar className="text-yellow-400 text-xl flex-shrink-0 mr-3" />
            <p className="text-background-800">
              Answer quickly and correctly to earn more stars!
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleStartQuiz} 
              className="px-10 py-3 text-lg"
            >
              Start Quiz
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4 text-background-800">How to Play</h2>
          <ul className="space-y-3 text-background-700">
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 bg-primary-100 text-primary-700 rounded-full text-center font-bold mr-2 flex-shrink-0">1</span>
              <span>Answer {questionsCount} multiple-choice questions within {timeInMinutes} minutes.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 bg-primary-100 text-primary-700 rounded-full text-center font-bold mr-2 flex-shrink-0">2</span>
              <span>Each correct answer earns you points.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 bg-primary-100 text-primary-700 rounded-full text-center font-bold mr-2 flex-shrink-0">3</span>
              <span>Finish faster for bonus points!</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 bg-primary-100 text-primary-700 rounded-full text-center font-bold mr-2 flex-shrink-0">4</span>
              <span>Earn stars based on your total score.</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
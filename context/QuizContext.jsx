'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getRandomQuestions, quizSettings } from '../data/questions';

const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [initialTime, setInitialTime] = useState(quizSettings.defaultTimeInMinutes * 60);
  const [stars, setStars] = useState(0);
  
  // Initialize quiz with random questions
  const initQuiz = (count = quizSettings.questionsCount, timeInMinutes = quizSettings.defaultTimeInMinutes) => {
    const selectedQuestions = getRandomQuestions(count);
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(0);
    setIsQuizCompleted(false);
    setInitialTime(timeInMinutes * 60);
    setTimeRemaining(timeInMinutes * 60);
    setStars(0);
  };

  // Start the quiz
  const startQuiz = () => {
    setIsQuizStarted(true);
    router.push('/quiz');
  };
  
  // Submit an answer
  const submitAnswer = (questionId, choiceIndex) => {
    console.log('QuizContext: Submitting answer for question ID:', questionId, 'choice:', choiceIndex);
    console.log('QuizContext: Current answers before update:', answers);
    setAnswers(prev => {
      const newAnswers = { ...prev, [questionId]: choiceIndex };
      console.log('QuizContext: New answers after update:', newAnswers);
      return newAnswers;
    });
  };
  
  // Move to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeQuiz();
    }
  };
  
  // Move to the previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  // Complete the quiz and calculate score
  const completeQuiz = () => {
    let correctCount = 0;
    
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    const baseScore = correctCount * quizSettings.pointsPerQuestion;
    
    // Apply time bonus if applicable
    let finalScore = baseScore;
    const timeBonus = calculateTimeBonus(timeRemaining, initialTime);
    if (timeBonus > 0) {
      finalScore = Math.round(baseScore * quizSettings.timeBonus.multiplier);
    }
    
    // Convert score to stars (1 star per 20 points)
    const earnedStars = Math.ceil(finalScore / 20);
    
    setScore(finalScore);
    setStars(earnedStars);
    setIsQuizCompleted(true);
    
    // Navigate to results page
    router.push('/results');
  };
  
  // Calculate time bonus
  const calculateTimeBonus = (remaining, initial) => {
    const percentRemaining = remaining / initial;
    return percentRemaining > quizSettings.timeBonus.threshold ? percentRemaining : 0;
  };
  
  // Reset quiz
  const resetQuiz = () => {
    setIsQuizStarted(false);
    setIsQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(0);
    router.push('/');
  };
  
  // Update time remaining
  const updateTimeRemaining = (time) => {
    setTimeRemaining(time);
  };
  
  // Handle time expiration
  const handleTimeExpired = () => {
    completeQuiz();
  };
  
  // Initialize quiz on first load
  useEffect(() => {
    initQuiz();
  }, []);
  
  const value = {
    questions,
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex],
    answers,
    score,
    stars,
    isQuizStarted,
    isQuizCompleted,
    timeRemaining,
    initialTime,
    initQuiz,
    startQuiz,
    submitAnswer,
    nextQuestion,
    prevQuestion,
    completeQuiz,
    resetQuiz,
    updateTimeRemaining,
    handleTimeExpired
  };
  
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
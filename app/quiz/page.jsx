'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '../../context/QuizContext';
import Quiz from '../../components/Quiz';

export default function QuizPage() {
  const { isQuizStarted, isQuizCompleted } = useQuiz();
  const router = useRouter();
  
  useEffect(() => {
    // Redirect if quiz is not started or already completed
    if (!isQuizStarted) {
      router.push('/');
    } else if (isQuizCompleted) {
      router.push('/results');
    }
  }, [isQuizStarted, isQuizCompleted, router]);
  
  if (!isQuizStarted) {
    return null; // Will redirect
  }
  
  return <Quiz />;
}
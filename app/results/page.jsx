'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '../../context/QuizContext';
import Results from '../../components/Results';

export default function ResultsPage() {
  const { isQuizCompleted } = useQuiz();
  const router = useRouter();
  
  useEffect(() => {
    // Redirect if quiz is not completed
    if (!isQuizCompleted) {
      router.push('/');
    }
  }, [isQuizCompleted, router]);
  
  if (!isQuizCompleted) {
    return null; // Will redirect
  }
  
  return <Results />;
}
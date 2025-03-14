'use client';

import { QuizProvider } from '@/context/QuizContext';
import { AuthProvider } from '@/context/AuthContext';

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <QuizProvider>
        {children}
      </QuizProvider>
    </AuthProvider>
  );
}
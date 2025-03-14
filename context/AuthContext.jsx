'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for stored user data on load
  useEffect(() => {
    const storedUser = localStorage.getItem('quizUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    // In a real app, you'd validate credentials with your backend here
    const user = { 
      id: 'user123', 
      username: userData.username,
      balance: 21412,
      deposit: 400000,
      verificationCode: 'ID647'
    };
    
    localStorage.setItem('quizUser', JSON.stringify(user));
    setUser(user);
    router.push('/');
  };

  const signup = (userData) => {
    // In a real app, you'd register the user with your backend here
    const user = { 
      id: 'user123', 
      username: userData.username,
      email: userData.email,
      balance: 0,
      deposit: 0,
      verificationCode: 'ID647'
    };
    
    localStorage.setItem('quizUser', JSON.stringify(user));
    setUser(user);
    router.push('/');
  };

  const logout = () => {
    localStorage.removeItem('quizUser');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
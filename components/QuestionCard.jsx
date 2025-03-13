'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '../context/QuizContext';
import ChoiceButton from './ChoiceButton';
import Button from './Button';
import ProgressBar from './ProgressBar';

export default function QuestionCard() {
  const { 
    currentQuestion, 
    currentQuestionIndex,
    questions,
    submitAnswer,
    nextQuestion,
    prevQuestion,
    answers
  } = useQuiz();
  
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  // Reset selected choice when question changes
  useEffect(() => {
    if (currentQuestion) {
      const previousAnswer = answers[currentQuestion.id];
      console.log('Question changed:', currentQuestion.id);
      console.log('Previous answer from context:', previousAnswer);
      console.log('Current answers in context:', answers);
      setSelectedChoice(previousAnswer !== undefined ? previousAnswer : null);
      setShowFeedback(false);
    }
  }, [currentQuestion, answers]);  

  console.log('Rendering QuestionCard:', {
    question: currentQuestion.question,
    selectedChoice,
    showFeedback,
    contextAnswers: answers[currentQuestion.id]
  });
  
  if (!currentQuestion) return null;
  
  const handleSelectChoice = (index) => {
    if (showFeedback) return; // Don't allow changing answer after feedback
    setSelectedChoice(index);
    
    // Immediately update the context with the new selection
    // This ensures the context is always in sync with what the user sees
    submitAnswer(currentQuestion.id, index);
  };  
  
  const handleSubmit = () => {
    if (selectedChoice === null) return;
    // No need to call submitAnswer here since it's already done in handleSelectChoice
    setShowFeedback(true);
  };
  
  const handleContinue = () => {
    setShowFeedback(false);
    nextQuestion();
  };

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentQuestion.id}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="card"
      >
        <div className="mb-6">
          <ProgressBar 
            value={currentQuestionIndex + 1} 
            max={questions.length} 
            label={`Question ${currentQuestionIndex + 1} of ${questions.length}`} 
          />
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-background-900">
          {currentQuestion.question}
        </h2>
        
        <div className="space-y-3 mb-6">
          {currentQuestion.choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              index={index}
              selected={selectedChoice === index}
              correct={showFeedback ? index === currentQuestion.correctAnswer : null}
              disabled={showFeedback}
              onClick={() => handleSelectChoice(index)}
            >
              {choice}
            </ChoiceButton>
          ))}
        </div>
        
        <div className="flex justify-between mt-8">
          <Button 
            variant="secondary"
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          {!showFeedback ? (
            <Button 
              onClick={handleSubmit}
              disabled={selectedChoice === null}
            >
              Submit Answer
            </Button>
          ) : (
            <Button 
              onClick={handleContinue}
            >
              {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
            </Button>
          )}
        </div>
        
        {showFeedback && (
          <motion.div 
            className={`mt-6 p-4 rounded-lg ${
              selectedChoice === currentQuestion.correctAnswer
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedChoice === currentQuestion.correctAnswer
              ? '✓ Correct answer!'
              : `✗ Incorrect. The correct answer is: ${currentQuestion.choices[currentQuestion.correctAnswer]}`}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
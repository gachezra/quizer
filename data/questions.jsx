export const questions = [
    {
      id: 1,
      question: "Which framework is this quiz built with?",
      choices: [
        "React",
        "Angular",
        "Next.js",
        "Vue.js"
      ],
      correctAnswer: 2, // Index of the correct answer (Next.js)
    },
    {
      id: 2,
      question: "Which animation library is used in this app?",
      choices: [
        "GSAP",
        "Framer Motion",
        "Anime.js",
        "Motion One"
      ],
      correctAnswer: 1, // Index of Framer Motion
    },
    {
      id: 3,
      question: "What color is the primary theme of this quiz app?",
      choices: [
        "Blue",
        "Purple",
        "Indigo",
        "Violet"
      ],
      correctAnswer: 2, // Index of Indigo
    },
    {
      id: 4,
      question: "What is the default time limit for this quiz?",
      choices: [
        "5 minutes",
        "10 minutes",
        "15 minutes",
        "20 minutes"
      ],
      correctAnswer: 2, // Index of 15 minutes
    },
    {
      id: 5,
      question: "Which is NOT a feature of this quiz app?",
      choices: [
        "Timed sessions",
        "Multiple choice questions",
        "Leaderboard",
        "Star/coin rewards"
      ],
      correctAnswer: 2, // Index of Leaderboard (not included by default)
    },
    {
      id: 6,
      question: "What CSS framework is used for styling?",
      choices: [
        "Bootstrap",
        "Tailwind CSS",
        "Material UI",
        "Chakra UI"
      ],
      correctAnswer: 1, // Index of Tailwind CSS
    },
    {
      id: 7,
      question: "Which deployment feature comes built-in with Next.js?",
      choices: [
        "Automatic CDN caching",
        "Serverless Functions",
        "Edge Functions",
        "All of the above"
      ],
      correctAnswer: 3, // Index of All of the above
    },
    {
      id: 8,
      question: "What is the latest major version of Next.js used here?",
      choices: [
        "Next.js 13",
        "Next.js 14",
        "Next.js 15",
        "Next.js 16"
      ],
      correctAnswer: 2, // Index of Next.js 15
    },
    {
      id: 9,
      question: "Which rendering strategy does Next.js support?",
      choices: [
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "Incremental Static Regeneration (ISR)",
        "All of the above"
      ],
      correctAnswer: 3, // Index of All of the above
    },
    {
      id: 10,
      question: "Which hook is commonly used for side effects in React?",
      choices: [
        "useState",
        "useEffect",
        "useContext",
        "useReducer"
      ],
      correctAnswer: 1, // Index of useEffect
    }
  ];
  
  // Generate more questions if needed
  export const getRandomQuestions = (count = 5) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  // Default quiz settings
  export const quizSettings = {
    defaultTimeInMinutes: 15,
    questionsCount: 10,
    pointsPerQuestion: 10,
    timeBonus: {
      threshold: 0.5, // 50% of time remaining
      multiplier: 1.5 // 1.5x points for finishing quickly
    }
  };
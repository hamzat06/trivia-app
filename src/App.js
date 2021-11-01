import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Quiz } from './components/Quiz'
import { ResultsScreen } from './components/ResultsScreen'
import ErrorBoundary from './components/ErrorBoundary'
import axios from 'axios'
import './App.css';

function App() {
  const [active, setActive] = useState('welcomeScreen')
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchQuestions()
    }, []
  )

  const BASE_URL = "https://opentdb.com"

  const answerOptions = [{option: 'True'}, {option: 'False'}]

  const checkAnswer = (option) => {
    if (option === questions[currentQuestion].correct_answer) {

      setScore(score + 1);
      questions[currentQuestion].passed = true
    }

    const nextQuestions = currentQuestion + 1;
    
    if (nextQuestions < questions.length) {
      setCurrentQuestion(nextQuestions);
    }
    else {
      setActive('resultsScreen')
    }
  }

  function goToQuiz() {
    setActive('quiz')
  }

  function restartGame() {
    setCurrentQuestion(0)
    setScore(0)
    setActive('welcomeScreen')
  }


  function pushQuestions() {
    questions.map((d) => {
      d.passed = false;
      return 0;
    })
  }

  async function fetchQuestions() {
    try {
      const res = await axios.get(BASE_URL + '/api.php?amount=10&difficulty=hard&type=boolean')

      if(res.status === 200 && res.data.results.length > 0) {
        setQuestions(res?.data?.results)
        pushQuestions()
        setLoading( false )
      }
    }
    catch(err) {
    console.log(err)
    setTimeout(() => {
      setLoading(false)
      }, 3000)
    }
  }


  return (
    <div className="App">
      <div className="container py-6">
        <div className="max-width-700 py-4 px-6">
          { active === 'welcomeScreen' && <WelcomeScreen goToQuiz={goToQuiz} /> }
          <ErrorBoundary>
            { active === 'quiz' && <Quiz currentQuestion={currentQuestion} questions={questions} answerOptions={answerOptions} checkAnswer={checkAnswer} loading={loading} /> }
          </ErrorBoundary>
          { active === 'resultsScreen' && <ResultsScreen playAgain={restartGame} questions={questions} score={score} /> }
        </div>
      </div>
    </div>
  );
}

export default App;

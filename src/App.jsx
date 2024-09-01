import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import OnboardingPage from './Pages/OnboardingPage'
import AppLayout from './Pages/AppLayout'
import Home from './Pages/Home'
import Create from './Pages/Create'
import QuizCreate from './Pages/QuizCreate'
import Quiz from './Pages/Quiz'
import { QuizContextProvider } from './Contexts/QuizContext'
import Scores from './Pages/Scores'
import QuizAnswer from './Pages/QuizAnswer'

function App() {
  const queryClient = new QueryClient()
  return (
    <QuizContextProvider>
      <>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<OnboardingPage />} />
              <Route path="/app" element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="create" element={<Create />} />
                <Route path="create/:title/:id" element={<QuizCreate />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="scores" element={<Scores />} />
                <Route path="scores/:title" element={<QuizAnswer />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </>
    </QuizContextProvider>
  )
}

export default App

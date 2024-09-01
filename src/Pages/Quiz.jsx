import React from 'react'
import QuizInfo from '../Components/QuizInfo'
import { takeQuizQuestion } from '../Contexts/QuizContext'

export default function Quiz() {
  const { state } = takeQuizQuestion()
  const quizdescrip = state?.QuizDescription[0]
  return (
    <>
      <QuizInfo
        Id={quizdescrip?.id}
        Description={quizdescrip?.Description}
        Time={quizdescrip?.Time}
        Title={quizdescrip?.Title}
        ppq={quizdescrip?.ppq}
      />
    </>
  )
}

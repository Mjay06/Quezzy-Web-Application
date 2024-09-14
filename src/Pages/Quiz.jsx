import React from 'react'
import QuizInfo from '../Components/QuizInfo'
import { takeQuizQuestion } from '../Contexts/QuizContext'
import { useNavigate } from 'react-router-dom'

export default function Quiz() {
  const { state } = takeQuizQuestion()
  const quizdescrip = state?.QuizDescription[0]
  const navigate = useNavigate()
  return (
    <>
      {quizdescrip && (
        <QuizInfo
          Id={quizdescrip?.id}
          Description={quizdescrip?.Description}
          Time={quizdescrip?.Time}
          Title={quizdescrip?.Title}
          ppq={quizdescrip?.ppq}
        />
      )}
      {!quizdescrip && (
        <div className="mx-auto text-center">
          <h3 className="text-black mt-12 mb-7 font-Montserrat text-sm font-semibold text-center">
            Oops looks like you inputted the wrong code
          </h3>
          <h3 className="text-purple mt-12 mb-7 font-Montserrat text-md font-semibold text-center"></h3>
          <img className="mx-auto" src="/error.svg" />
          <button
            className="underline"
            onClick={() => {
              navigate(`/app/home`, { replace: true })
            }}
          >
            {' '}
            Proceed back to the home page
          </button>
        </div>
      )}
    </>
  )
}

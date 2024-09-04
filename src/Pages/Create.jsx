import React, { useState } from 'react'
import './Create.css'
import QuizCard from '../Components/QuizCard'
import QuizForm from '../Components/QuizForm'
import { useQuizData } from '../QueryFetches/useQuiz'
import { Link } from 'react-router-dom'
import { DeleteQuizWithQUestions } from '../Apis/QuizApi'
import { useQueryClient } from '@tanstack/react-query'

export default function Create() {
  //for form
  const queryClient = useQueryClient()
  const [form, setShowform] = useState(false)

  //to get the quiz data
  const { data, status, eror } = useQuizData()

  if (status === 'success') {
    console.log(data.Quizzes)
  }

  return (
    <div>
      <h2 className="text-black mt-7 mb-7 w-2/3 font-Montserrat font-semibold">
        Create <span style={{ color: '#6A5AE0' }}>Quiz</span>
      </h2>
      {!form && (
        <img
          onClick={() => setShowform((form) => !form)}
          className="bg-white rounded-full p-2 absolute bottom-20 right-10"
          src="../src/assets/addIcon.svg"
        />
      )}
      {status === 'success' && data.Quizzes.length >= 1
        ? data.Quizzes.map((quiz) => (
           <Link to={`${quiz.Title}/${quiz.id}`} > <QuizCard
              Title={quiz.Title}
              Description={quiz.Description}
              Code={quiz.Code}
              Time={quiz.Time}
              ppq={quiz.ppq}
              quizImg={quiz.quizImg}
              key={quiz.Title}
              id= {quiz.id}
            />
            </Link>
          ))
        : ''}

      {form && <QuizForm setForm={setShowform} />}
    </div>
  )
}

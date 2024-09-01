import React, { useEffect, useState } from 'react'

import QuizCard from '../Components/QuizCard'
import { useParams } from 'react-router-dom'
import { GetQuestion, GetQuizQuestion } from '../Apis/QuizApi'
import { useQuery } from '@tanstack/react-query'
import QuizQuestion from '../Components/QuizQuestion'
import QuestionForm from '../Components/QuestionForm'

export default function QuizCreate() {
  const [form, setForm] = useState(false)
  const { id, title } = useParams()
  let no = 0
  console.log(id)
  const { data, error, isLoading } = useQuery({
    queryKey: ['questions', id],
    queryFn: () => GetQuestion(Number(id)),
  })

  if (isLoading === true) return <div>Loading...</div>
  if (isLoading === false) {
    console.log(data)
  }

  return (
    <div>
      {' '}
      <div className="flex justify-between place-items-center my-5">
        <h2 className="text-black mt-7 mb-7 w-2/3 font-Montserrat font-semibold">
          {title} <span style={{ color: '#6A5AE0' }}>Questions</span>
        </h2>
        {!form && (
          <img
            onClick={() => setForm((form) => !form)}
            className="bg-white rounded-full p-1"
            src="/src/assets/addIcon.svg"
          />
        )}
      </div>
      {form && <QuestionForm id={id} setForm={setForm} />}
      {!isLoading &&
        data.map((question) => {
          no++
          return (
            <QuizQuestion
              No={no}
              A={question.A}
              B={question.B}
              C={question.C}
              D={question.D}
              Answer={question.answer}
              Question={question.Question}
              id={question.id}
            />
          )
        })}
    </div>
  )
}

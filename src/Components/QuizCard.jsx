import React from 'react'
import { deleteQuizQuestion } from '../QueryFetches/useQuiz'
import { useQueryClient } from '@tanstack/react-query'
import { DeleteQuizWithQUestions } from '../Apis/QuizApi'
import { useNavigate } from 'react-router-dom'

export default function QuizCard({
  Title,
  Description,
  Code,
  Time,
  ppq,
  quizImg,
  id,
}) {
  const queryClient = useQueryClient()
  const mutation = deleteQuizQuestion(queryClient)
  const navigate = useNavigate()
  return (
    <div className="flex gap-3 place-items-center p-3 bg-white rounded-lg my-3 justify-between">
      <div className="flex place-items-center gap-4">
        <div className="cp-imgBox">
          <img className="cp-imgBox-img" src={quizImg} />
        </div>
        <div>
          <h2 className="text-purple font-semibold text-sm font-Montserrat">
            {Title}
          </h2>
          <p className="font-Lato text-sm font-light">{Description}</p>
          <ul className="flex gap-3 font-Lato font-light  text-xs">
            <li>Duration: {Time} mins</li>
            <li>Points/Question: {ppq}</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col place-items-center gap-3'>
        { mutation.isLoading === true ? <p className='text-xs text-red-600'> Deleting.. </p>: <img
          onClick={() => {
            mutation.mutate(id)
          }}
          className="w-5"
          src="/src/assets/delete.svg"
        />}
        <p onClick={()=>{
           navigate(`${Title}/${id}`)
        }} className='font-Lato  text-xs underline text-purple'>Add Questions &rarr;</p>
      </div>
    </div>
  )
}

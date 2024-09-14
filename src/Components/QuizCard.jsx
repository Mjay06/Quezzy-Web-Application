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
    <div className="flex flex-col md:flex-row md:gap-3 md:h-1/4 lg:h-1/4 lg:flex-row lg:gap-3 place-items-start md:place-items-center lg:place-items-center p-3 bg-white rounded-lg my-3 justify-between h-1/2">
      <div className="flex flex-col md:flex-row  lg:flex-row md:place-content-center lg:place-items-center gap-4">
        <div className="cp-imgBox">
          <img className="cp-imgBox-img" src={quizImg} />
        </div>
        <div>
          <h4 className="text-purple font-semibold text-xs font-Montserrat">
            {Title}
          </h4>
          <p className="font-Lato text-sm font-light">{Description}</p>
          <ul className="flex flex-col md:flex-row lg:flex-row gap-3 font-Lato font-light  text-xs">
            <li>Duration: {Time} mins</li>
            <li>Points/Question: {ppq}</li>
            <li>Code: {Code}</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row-reverse lg:w-fit md:w-fit w-full md:flex-row lg:flex-col justify-between mt-5 place-items-center gap-3'>
        { mutation.isLoading === true ? <p className='text-xs text-red-600'> Deleting.. </p>: <img
          onClick={() => {
            mutation.mutate(id)
          }}
          className="w-5"
          src="/delete.svg"
        />}
        <p onClick={()=>{
           navigate(`${Title}/${id}`)
        }} className='font-Lato  text-xs underline text-purple'>Add Questions &rarr;</p>
      </div>
    </div>
  )
}

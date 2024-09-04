import React from 'react'
import { DeleteQuestion } from '../Apis/QuizApi'
import { deleteQuiz } from '../QueryFetches/useQuiz'
import { useQueryClient } from '@tanstack/react-query'

export default function QuizQuestion({
  No,
  A,
  B,
  C,
  D,
  Answer,
  Question,
  id,
  type = undefined,
}) {
  const queryClient = useQueryClient()

  function invalidatequery(){
    queryClient.invalidateQueries(['questions', id])
  }
  const mutation = deleteQuiz(invalidatequery)
  return (
    <div className="place-items-center p-4 bg-white my-3">
      <div>
        <h2 className="text-purple font-semibold text-base font-Montserrat">
          Question {No}
        </h2>
        <p className="font-Lato text-sm font-light">{Question}</p>
        <ul className="flex font-Lato font-light text-xs my-2 justify-between">
          <li>A: {A}</li>
          <li>B: {B}</li>
          <li>C: {C}</li>
          <li>D: {D}</li>
        </ul>
        <p>Answer: {Answer}</p>
        <div className="flex gap-2 justify-end font-bold">
          {type || (
            <span
              onClick={() => mutation.mutate(id)}
              className="text-xs text-red-500 cursor-pointer"
            >
              Delete
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import QuizQuestion from '../Components/QuizQuestion'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { GetQuizResult } from '../Apis/QuizApi'

export default function QuizAnswer() {
  const { id, title } = useParams()
  console.log(id)
  const { data, error, isLoading } = useQuery({
    queryKey: ['answers', id],
    queryFn: () => GetQuizResult(Number(id)),
    onSuccess: (data) => {
      console.log('dataLoaded')
    },
  })
  console.log
  if (isLoading) return <p>Loading</p>

  if (data)
    return (
      <div>
        {data.data.map((datum) => (
          <div>
            <div className="flex place-items-center justify-between my-2 bg-white px-3 py-4 rounded-lg">
              <h4 className="font-Lato">{datum.Name}</h4>
              <h3 className="font-Montserrat font-semibold text-purple">
                {datum.Score}
                <span className="text-sm font-extralight">pts</span>
              </h3>
            </div>{' '}
          </div>
        ))}
      </div>
    )
}

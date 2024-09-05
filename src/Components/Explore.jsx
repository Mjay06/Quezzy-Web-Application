import { useQuery } from '@tanstack/react-query'

import { Navigate, replace, useNavigate } from 'react-router-dom'
import { SearchQuiz } from '../Apis/QuizApi'
import { takeQuizQuestion } from '../Contexts/QuizContext'
import React, { useEffect, useRef, useState } from 'react'
import { getQuizDescription, useSearchQuiz } from '../QueryFetches/useQuiz'

export default function Explore({ Title, description, image, type, to }) {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [enabled, setEnabled] = useState(false)
  const { state, dispatch } = takeQuizQuestion()
  const { data, isLoading, error } = useSearchQuiz(code, enabled)

  useEffect(() => {
    console.log(data)
    dispatch({ type: 'setQuizDescription', payload: data })
    if (data) {
      navigate(`/app/quiz`, { replace: true })
      setEnabled(false)
    }
  }, [data])

  async function TakeQuiz() {
    //console.log(code)
    //console.log('before hook')
    //const data = await SearchQuiz(code)
    setEnabled(true)

    //
  }

  return (
    <div
      onClick={() => {
        to ? navigate(`${to}`, { replace: true }) : ''
      }}
      className=" relative bg-white  w-full gap-6 my-8 p-8 lg:w-1/3"
    >
      <h2 className="bg-purple absolute -top-5 left-0 rounded-lg  my-0 ml-0 text-center w-fit px-5 py-3 font-semibold text-lg text-white">
        {Title}
      </h2>
      <img className=" lg:w-full sm:w-4/5 mx-auto" src={image} />
      <p className="text-center mx-auto text-sm w-fit my-4">{description}</p>
      {type === 'Expand' && (
        <>
          {' '}
          <input
            className="w-full color-shade focus:ring-0 focus:outline-purple-700 px-3 py-3 rounded-md mx-auto"
            placeholder="Input your friends unique quiz code"
            onChange={(e) => {
              setCode(e.target.value)
            }}
            value={code}
          ></input>
          <button
            onClick={TakeQuiz}
            className="w-full mt-4  focus:ring-0  focus:outline-purple-700 px-3 py-3 font-semibold text-white rounded-md bg-purple mx-auto"
          >
            {!isLoading ? 'Take Quiz' : 'Loading Quiz'}
          </button>
        </>
      )}
    </div>
  )
}

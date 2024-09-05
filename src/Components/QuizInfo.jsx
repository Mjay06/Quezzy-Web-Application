import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { GetQuestion, GetQuizQuestion } from '../Apis/QuizApi'
import QuizQuestionCard from './QuizQuestionCard'
import { takeQuizQuestion } from '../Contexts/QuizContext'
import QuizFinished from './QuizFinished'
import Timer from  './Timer'

export default function QuizInfo({ Time, Title, Description, ppq, Id }) {
  const [name, setName] = useState(null)
  const [question, setQuestion] = useState(false)
  const [number, setNumber] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const { dispatch, state } = takeQuizQuestion()
  const { data, error, isLoading } = useQuery({
    queryKey: ['questions', Id],
    queryFn: () => GetQuestion(Number(Id)),
  })
  const prevExcept = number === 0
  const nextExcept = number + 1 === data?.length
  
  function OnSubmit() {
    if (name) {
      setQuestion(true)
      dispatch({ type: 'StartQuiz', payload: name })
    }
  }
  function saveToLocalStorage(key, value) {
    // Retrieve the existing list from localStorage
    let list = JSON.parse(localStorage.getItem(key)) || []
    // Add the new value to the list
    list.push(value)

    // Save the updated list back to localStorage
    localStorage.setItem(key, JSON.stringify(list))
  }

  if (state?.status === 'quizLoaded')
    return (
      <>
        <h2 className="text-black mt-7 mb-7 w-4/5 font-Montserrat font-semibold">
          Welcome to <span style={{ color: '#6A5AE0' }}>{Title}</span> Quiz
        </h2>
        <p className="font-lato text-sm ">{Description}</p>
        <input
          className="w-full color-shade focus:ring-0 focus:outline-purple-700 px-3 py-3 rounded-md mx-auto my-8 bg-slate-200"
          placeholder="Name of the person taking the Quiz"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <h3 className=" lg:mx-auto md:mx-auto  bg-purple mt-12 text-center w-fit px-5 py-2 font-semibold text-lg text-white">
          Quiz Info
        </h3>
        <ul className="lg:text-center md:text-center text-sm my-8 mx-auto text-left">
          <li>
            {' '}
            <b>Time Limit:</b> {Time} minutes
          </li>
          <li>
            <b>Difficulty Level:</b> Medium
          </li>
          <li>
            <b> Points Per Question:</b> {ppq}
          </li>
        </ul>

        <button
          onClick={() => OnSubmit()}
          className="bg-purple mt-12 mx-auto rounded-md  text-center w-full px-12 py-2 font-semibold text-lg text-white md:w-3/4 flex justify-center"
        >
          Start Quiz
        </button>
      </>
    )

  if (state?.status === 'Started') {
    return (
      <>
        <div className="flex justify-between my-12">
          <h1 className="font-Montserrat font-semibold text-slate-500">
            Question {number + 1}
          </h1>
          <p>
            15:00
          </p>
        </div>
        <QuizQuestionCard
          A={data[number].A}
          B={data[number].B}
          C={data[number].C}
          D={data[number].D}
          Question={data[number].Question}
          answer={data[number].answer}
          ppq={ppq}
          setNo={setNumber}
          no={number}
          prevExcept={prevExcept}
          nextExcept={nextExcept}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />{' '}
      </>
    )
  }

  if (state?.status === 'finished') {
    function save() {
      saveToLocalStorage('QuizScore', state)
    }

    return (
      <QuizFinished
        dispatch={dispatch}
        score={state.Score}
        possibleScore={ppq * data.length}
        save={save}
      />
    )
  }
}

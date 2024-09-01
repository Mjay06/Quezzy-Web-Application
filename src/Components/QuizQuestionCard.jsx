import React, { useState } from 'react'
import { takeQuizQuestion } from '../Contexts/QuizContext'

export default function QuizQuestionCard({
  A,
  B,
  C,
  D,
  Question,
  no,
  setNo,
  prevExcept,
  nextExcept,
  selectedOption,
  setSelectedOption,
  answer,
  ppq,
}) {
  const { dispatch, state } = takeQuizQuestion()

  return (
    <div>
      <p className="font-Lato text-md">{Question}</p>
      <ul className="my-10">
        <li
          onClick={() => setSelectedOption('A')}
          className="flex gap-4 place-items-center bg-white py-4 px-2 rounded-xl my-2"
          style={{ backgroundColor: 'A' === selectedOption && '#DFDAFF' }}
        >
          <span className="purple-fade px-3.5 py-1.5 rounded-full">A</span>
          <p>{A}</p>
        </li>
        <li
          onClick={() => setSelectedOption('B')}
          className="flex gap-4 place-items-center bg-white py-4 px-2 rounded-xl my-2"
          style={{ backgroundColor: 'B' === selectedOption && '#DFDAFF' }}
        >
          <span className="purple-fade px-3.5 py-1.5 rounded-full">B</span>
          <p>{B}</p>
        </li>
        <li
          onClick={() => setSelectedOption('C')}
          className="flex gap-4 place-items-center bg-white py-4 px-2 rounded-xl my-2"
          style={{ backgroundColor: 'C' === selectedOption && '#DFDAFF' }}
        >
          <span className="purple-fade px-3.5 py-1.5 rounded-full">C</span>
          <p>{C}</p>
        </li>
        <li
          onClick={() => {
            setSelectedOption('D')
          }}
          className="flex gap-4 place-items-center bg-white py-4 px-2 rounded-xl my-2"
          style={{ backgroundColor: 'D' === selectedOption && '#DFDAFF' }}
        >
          <span className="purple-fade px-3.5 py-1.5 rounded-full">D</span>
          <p>{D}</p>
        </li>
      </ul>
      <div className="flex justify-between text-purple font-Lato">
        {!prevExcept ? (
          <p
            onClick={() => {
              setNo((no) => no - 1),
                setSelectedOption(state.QuizData[no - 1].userAnswer),
                dispatch({ type: 'PrevQuestion' })
            }}
          >
            Previous
          </p>
        ) : (
          <p>.</p>
        )}
        {!nextExcept ? (
          <p
            onClick={() => {
              setSelectedOption(state.QuizData[no + 1]?.userAnswer),
                setNo((no) => no + 1)
              dispatch({
                type: 'NextQuestion',
                payload: {
                  questionNo: no,
                  selected: selectedOption,
                  correct: answer,
                  question: Question,
                  A: A,
                  B: B,
                  C: C,
                  D: D,
                },
              })
            }}
          >
            Next
          </p>
        ) : (
          <p
            onClick={() => {
              console.log(ppq)
              dispatch({
                type: 'Submit',
                payload: {
                  questionNo: no,
                  selected: selectedOption,
                  correct: answer,
                  point: ppq,
                  question: Question,
                  A: A,
                  B: B,
                  C: C,
                  D: D,
                },
              })
              console.log(state)
            }}
          >
            Submit
          </p>
        )}
      </div>
    </div>
  )
}

import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function QuizFinished({ dispatch, score, possibleScore, save, saveToRemote }) {
  const navigate = useNavigate()
  return (
    <div className="mx-auto text-center">
      <h3 className="text-black mt-12 mb-7 font-Montserrat text-sm font-semibold text-center">
        You've Just Finished Your Quiz!!
      </h3>
      <h3 className="text-purple mt-12 mb-7 font-Montserrat text-md font-semibold text-center">
        Score: <br /> {score} / {possibleScore} <br /> pts
      </h3>
      <img className="mx-auto" src="../src/assets/cup.svg" />
      <button
        className="underline"
        onClick={() => {
          save()
          saveToRemote()
          navigate(`/app/home`, { replace: true })
          dispatch({ type: 'reStart' })
        }}
      >
        {' '}
        Proceed back to the home page
      </button>
    </div>
  )
}

import React from 'react'

export default function ScoresBox({quiz, setdata}) {
    console.log(quiz)
  return (
    <div className="flex place-items-center justify-between my-2 bg-white px-3 py-4 rounded-lg">
      <h4 className="font-Lato">{quiz.QuizDescription[0].Title}</h4>
      <h3 className="font-Montserrat font-semibold text-purple">
        {quiz.Score}/{quiz.QuizDescription[0].ppq * quiz.QuizData.length} <span className="text-sm font-extralight">pts</span>
      </h3>
      <p className="text-sm underline" onClick={() => setdata(quiz)}>Answer</p>
    </div>
  )
}

import React from 'react'

export default function QuizCard({Title, Description, Code, Time, ppq, quizImg}) {
  return (
    <div className="flex gap-3 place-items-center p-3 bg-white rounded-lg my-3">
      <div className="cp-imgBox">
        <img
          className="cp-imgBox-img"
          src={quizImg}
        />
      </div>
      <div>
        <h2 className="text-purple font-semibold text-sm font-Montserrat">
          {Title}
        </h2>
        <p className="font-Lato text-sm font-light">
          {Description}
        </p>
        <ul className="flex gap-3 font-Lato font-light  text-xs">
          <li>Duration: {Time} mins</li>
          <li>Points/Question: {ppq}</li>
        </ul>
      </div>
    </div>
  )
}

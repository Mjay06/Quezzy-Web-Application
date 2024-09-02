import React, { useState } from 'react'
import Explore from '../Components/Explore'
import ScoresBox from '../Components/ScoresBox'
import QuizQuestion from '../Components/QuizQuestion'

export default function Scores() {
  function getFromLocalStorage(key) {
    const stringValue = localStorage.getItem(key)
    return JSON.parse(stringValue)
  }
  const quizInfo = getFromLocalStorage('QuizScore')
  const [data, setdata] = useState('')

  if (!data)
    return (
      <div>
        <section>
          <h2 className="text-black mt-7 mb-7 w-2/3 font-Montserrat font-semibold">
            View <span style={{ color: '#6A5AE0' }}>Scores</span>
          </h2>
          {quizInfo.map((quiz) => (
            <ScoresBox quiz={quiz} state={quizInfo} setdata={setdata} />
          ))}
        </section>

        <h2 className="text-black mt-7 mb-7 w-2/3 font-Montserrat font-semibold">
          Created Quiz <span style={{ color: '#6A5AE0' }}>Scores</span>
        </h2>
        <div className="">
          <Explore
            Title={'General Knowledge'}
            description={'This quiz has already been created'}
          />
          <Explore
            Title={'General Knowledge'}
            description={'This quiz has already been created'}
          />
          <Explore
            Title={'General Knowledge'}
            description={'This quiz has already been created'}
          />
        </div>
        <secion></secion>
      </div>
    )
  if (data)
    console.log(data)
    return (
      <div>
       { data.QuizData.map(quiz => <QuizQuestion A={quiz.A} B={quiz.B} C={quiz.C} D={quiz.D} Answer={quiz.CorrectAnswer} Question={quiz.Question} type="correction"  /> ) }
       <p onClick={()=>{setdata("")}} className='underline'>Back</p>
      </div>
    )
}

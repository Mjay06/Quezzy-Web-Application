import React, { useState } from 'react'
import Explore from '../Components/Explore'
import ScoresBox from '../Components/ScoresBox'
import QuizQuestion from '../Components/QuizQuestion'
import { useQuizData } from '../QueryFetches/useQuiz'
import { useUserData } from '../Contexts/UserDataContext'
import { Link } from 'react-router-dom'

export default function Scores() {
  function getFromLocalStorage(key) {
    const stringValue = localStorage.getItem(key)
    return JSON.parse(stringValue)
  }
  const quizInfo = getFromLocalStorage('QuizScore')
  const [data, setdata] = useState('')
  const { state } = useUserData()
  const userId = state?.UserData?.user?.identities[0]?.user_id

  //to get the quiz data
  const { data: createdQuiz, status, eror } = useQuizData(userId)

  if (!data)
    return (
      <div>
        <section>
          <h2 className="text-black mt-7 mb-7 w-2/3 font-Montserrat font-semibold">
            View <span style={{ color: '#6A5AE0' }}>Scores</span>
          </h2>
          {quizInfo ? (
            quizInfo.map((quiz) => (
              <ScoresBox quiz={quiz} state={quizInfo} setdata={setdata} />
            ))
          ) : (
            <p> You havn't taken any tests yet. </p>
          )}
        </section>

        <h2 className="text-black mt-7 mb-7 w-2/3 font-Montserrat font-semibold">
          Created Quiz <span style={{ color: '#6A5AE0' }}>Scores</span>
        </h2>
        <section className="flex gap-1 flex-wrap">
          {createdQuiz ? (
            createdQuiz.Quizzes.map((quiz) => {
              return (
                <div className="flex-grow lg:flex-grow-0 lg:basis-[calc(33.33%-0.25rem)]">
                  <Link to={`${quiz.Title}/${quiz.id}`}>
                    <Explore
                      Title={quiz.Title}
                      description={quiz.Description}
                      image={quiz.quizImg}
                    />
                  </Link>
                </div>
              )
            })
          ) : (
            <p>You dont have any created quiz</p>
          )}
        </section>
      </div>
    )
  if (data) console.log(data)
  return (
    <div>
      {data.QuizData.map((quiz) => (
        <QuizQuestion
          A={quiz.A}
          B={quiz.B}
          C={quiz.C}
          D={quiz.D}
          Answer={quiz.CorrectAnswer}
          Question={quiz.Question}
          type="correction"
        />
      ))}
      <p
        onClick={() => {
          setdata('')
        }}
        className="underline"
      >
        Back
      </p>
    </div>
  )
}

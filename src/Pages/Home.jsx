import React from 'react'
import Explore from '../Components/Explore'
import { Link, NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mx-w-lg">
      <h2 className="text-black mt-7 mb-7 w-2/3 font-Montserrat font-semibold">
        Welcome <span style={{ color: '#6A5AE0' }}>MJ</span>, Lets Unleash Your
        Knowledge!!!
      </h2>
      <div className="sm:block md:flex lg:flex gap-5 my-10">
        <Explore
          type={"route"}
          Title={'Create Quiz'}
          description={
            'Easily create custom quizzes with various question types and time limits.'
          }
          image={'../src/assets/createQuizIcon.svg'}
          to={"/app/create"}
        />

        <Explore
          type={'Expand'}
          Title={'Take a friends quiz'}
          description={'Get tested by your friend on any topic of their choice'}
          image={'../src/assets/FriendsQuiz.svg'}
        />
        <Explore
          Title={'View Score'}
          description={'See your scores and track your progress.'}
          image={'../src/assets/score.svg'}
          to={"/app/scores"}
        />
      </div>
    </div>
  )
}

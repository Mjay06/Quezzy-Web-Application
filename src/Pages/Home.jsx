import React, { useEffect } from 'react'
import Explore from '../Components/Explore'
import { Link, NavLink } from 'react-router-dom'
import { GetUser } from '../Apis/UserAuthentication'
import { GetUserData } from '../QueryFetches/useQuiz'
import { useUserData } from '../Contexts/UserDataContext'

export default function Home() {
  function getUsernameFromEmail(email) {
    // Check if the email is a valid Gmail address
    if (email.includes('@gmail.com')) {
      // Split the email at the '@' symbol and return the first part
      return email.split('@')[0]
    }
  }

  const { dispatch, state } = useUserData()
  const { data, isLoading } = GetUserData()
  useEffect(() => {
    if (!isLoading) {
      console.log(data.user)
      dispatch({ type: 'UserLoggedIn', payload: data })
    }
  }, [data])
  // if (!isLoading) {
  //   console.log(data)
  //   dispatch({ type: 'UserLoggedIn', payload: data })
  // }

  return (
    <div className="mx-w-lg">
      <h2 className="text-black mt-7 mb-7 w-2/3 font-Montserrat font-semibold">
        Welcome{' '}
        <span style={{ color: '#6A5AE0' }}>
          {data && getUsernameFromEmail(data.user.email)}
        </span>
        , Lets Unleash Your Knowledge!!!
      </h2>
      <div className="sm:block md:flex lg:flex gap-5 my-10">
        <Explore
          type={'route'}
          Title={'Create Quiz'}
          description={
            'Easily create custom quizzes with various question types and time limits.'
          }
          image={'../src/assets/createQuizIcon.svg'}
          to={'/app/create'}
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
          to={'/app/scores'}
        />
      </div>
    </div>
  )
}

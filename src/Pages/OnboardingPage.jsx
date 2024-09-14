import React from 'react'
import { Link } from 'react-router-dom'
import { LoginWithGoogle } from '../Apis/UserAuthentication'

export default function OnboardingPage() {
  return (
    <div className="hp">
      <img className="hp-logo" src="/logo.svg" />
      <h1 className="hp-h1">Unleash your knowledge</h1>
      <p className="hp-p">#Challengeyourlimits</p>

      <div className="hp-featurecard">
        <h2 className="hp-featurecard-h2 hp-featurecard-box">Create Quizzes</h2>
        <p className="hp-featurecard-p">
          Easily create custom quizzes with various question types and time
          limits.
        </p>
        <div className="hp-imgbox">
          <img className="hp-img" src="/illustration.svg" />
        </div>
      </div>

      <button
        onClick={() => {
          LoginWithGoogle()
        }}
        className="hp-button text-center flex justify-center"
      >
        {' '}
        SIgn In With Google
      </button>
    </div>
  )
}

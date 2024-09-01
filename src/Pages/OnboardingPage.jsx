import React from 'react'
import { Link } from 'react-router-dom'

export default function OnboardingPage() {
  return (
    <div className="hp">
      <img className="hp-logo" src="./src/assets/logo.svg" />
      <h1 className="hp-h1">Unleash your knowledge</h1>
      <p className="hp-p">#Challengeyourlimits</p>

      <div className="hp-featurecard">
        <h2 className="hp-featurecard-h2 hp-featurecard-box">Create Quizzes</h2>
        <p className="hp-featurecard-p">
          Easily create custom quizzes with various question types and time
          limits.
        </p>
        <div className="hp-imgbox">
          <img className="hp-img" src="./src/assets/illustration.svg" />
        </div>
      </div>
      <Link to="/app">
        <button className="hp-button">Get Started</button>
      </Link>
    </div>
  )
}

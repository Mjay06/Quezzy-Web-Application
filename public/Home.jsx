import React from 'react'

export default function Home() {
  return (
    <div>
      <img className="op-logo" src="\src\assets\Logo.png" />
      <img className="hp-home" />
      <h1 className="hp-h1">Welcome MJ, Lets Unleash Your Knowedge</h1>
      <div className="hp-featureCard">
        <h2 className="hp-featureCard-h2">Explore Quizzes</h2>
        <img className="hp-featureCard-img" />
        <p className="hp-featureCard-p">
          Browse and take quizzes from different categories
        </p>
      </div>
    </div>
  )
}

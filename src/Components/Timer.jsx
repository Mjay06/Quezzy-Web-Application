// Timer.js
import React, { useState, useEffect } from 'react'

const Timer = ({ start, startMinutes, onSubmit }) => {
  const [seconds, setSeconds] = useState(startMinutes * 60)

  useEffect(() => {
      let interval = null
    if (start) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
    } else if (!start && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [start, seconds])

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(interval)
      onSubmit()
    }
  }, [seconds, onSubmit])

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`
  }

  return (
    <div className="timer">
      <p>{formatTime(seconds)}</p>
    </div>
  )
}

export default Timer

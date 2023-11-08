//imports
import { useState } from 'react'

//functions
const increaseCount = (state, setState) => {
  return () => { setState(state + 1) }
}

//components
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>{text}{"\t"}{value}</div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  let average = (good - bad) / all
  let positive = `${good / all} %`
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={increaseCount(good, setGood)} />
      <Button text="neutral" onClick={increaseCount(neutral, setNeutral)} />
      <Button text="bad" onClick={increaseCount(bad, setBad)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
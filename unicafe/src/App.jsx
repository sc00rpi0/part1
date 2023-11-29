import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = ({ good, neutral, bad }) => {

  const totalFeedbacks = good + bad + neutral
  let average = 0;
  let positive = 0;

  if (totalFeedbacks != 0) {
    average = (good - bad) / totalFeedbacks
    if (good > 0)
      positive = (good / totalFeedbacks) * 100
  }

  return (
    <p>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad} <br />
      all {totalFeedbacks} <br />
      average {average} <br />
      positive {positive} %
    </p>
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
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

import { useState } from "react"

const StatisticsLine = ({text, value}) => {
  if (text === "positive") {
    return (
      <p>{text} {value} % </p>
    )
  }
  return (
    <p>{text} {value}</p>
  )
}

const Button = ({clickEvent, buttonName}) => {
  return (
    <button onClick={clickEvent}>{buttonName}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={good + neutral + bad} />
      <StatisticsLine text="average" value={(good - bad) / (good + neutral + bad)} />
      <StatisticsLine text="positive" value={good / (good + neutral + bad) * 100} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickEvent={increaseGood} buttonName={"good"}/>
      <Button clickEvent={increaseNeutral} buttonName={"neutral"}/>
      <Button clickEvent={increaseBad} buttonName={"bad"} />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
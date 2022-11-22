import { useState } from "react"

const StatisticLine = ({ value, text, mark }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  // console.log(props)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = `${(good / all) * 100} %`
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine value={good} text='good' />
          <StatisticLine value={neutral} text='neutral' />
          <StatisticLine value={bad} text='bad' />
          <StatisticLine value={all} text='all' />
          <StatisticLine value={average} text='average' />
          <StatisticLine value={positive} text='positive' />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ buttonClick, text }) => {

  // console.log(buttonClick, text)

  return (
    <button onClick={buttonClick}>
      {text}
    </button>
  )
}

const App = () => {

  const  [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  // console.log(good, neutral, bad)

  return (
    <div>
      <h1>give feedback</h1>
      <Button buttonClick={handleGoodClick} text='good' />
      <Button buttonClick={handleNeutralClick} text='neutral' />
      <Button buttonClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

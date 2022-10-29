import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const startObject = {}
  for (let i = 0; i < anecdotes.length; i++) {
    startObject[i] = 0
  }
  const [points, setPoints] = useState(startObject)

  const randomSelect = () => {
    const nextNum = Math.floor(Math.random() * anecdotes.length)
    if (nextNum === selected) {
      setSelected(nextNum + 1)
    } else {
      setSelected(nextNum)
    }
  }

  const addVote = () => {
    const copy = {
      ...points,
    }
    if (copy[selected] === undefined) {
      copy[selected] = 0
    } else {
      copy[selected] += 1
    }
    setPoints(copy)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={addVote}>vote</button>
      <button onClick={randomSelect}>next anecdote</button>
    </div>
  )
}

export default App
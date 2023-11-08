import { useState } from 'react'

//functions
const getRandomNumber = () => {
  const num = Math.floor(Math.random() * 8)
  { console.log(num) }
  return num
}

const handleNext = (setSelected) => {
  setSelected(getRandomNumber())
}

const handleAddVote = (selected, votes, setVotes, setMaxVoted) => {
  const newVotes = [...votes]
  newVotes[selected] += 1
  setVotes(newVotes)

}

//components
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const HighestVoted = ({ anecdotes, votes }) => {
  const highestVoted = votes.reduce((acc, currentVal) => {
    return currentVal >= acc ? currentVal : acc
  }, 0)
  const highestVotedIndex = votes.indexOf(highestVoted)
  return (
    <div>
      <h1>Highest Voted</h1>
      <p>{anecdotes[highestVotedIndex]} {votes[highestVotedIndex]}</p>
    </div>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <div>has {votes[selected]} votes</div>
      <Button text="vote" onClick={() => { handleAddVote(selected, votes, setVotes, setMaxVoted) }} />
      <Button text="next anecdote" onClick={() => { handleNext(setSelected) }} />
      <HighestVoted votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App
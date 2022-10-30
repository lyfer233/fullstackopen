import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [findName, setFindName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let flag = true
    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        flag = false
      }
    })
    if (flag) {
      const personObject = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNumber('')
    }
  }

  const changeName = (event) => {
    setNewName(event.target.value)
  }

  const changeNumber = (event) => {
    setNumber(event.target.value)
  }

  const changeFindName = (event) => {
    setFindName(event.target.value)
  }

  const filteredPersons = findName === '' ? persons : persons.filter(person => {
    return person.name.toLowerCase().startsWith(findName.toLowerCase())
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={findName} onChange={changeFindName}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={changeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App
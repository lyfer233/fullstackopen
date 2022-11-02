import React, { useState, useEffect } from 'react'
import Filter  from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import connectService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [findName, setFindName] = useState('')

  // Get the data from the server.
  useEffect(() => {
    connectService
      .getData()
      .then(data => setPersons(data))
  }, [])
  
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

      connectService
      .addData(personObject)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        setNewName('')
        setNumber('')
      })
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

      <Filter filterValue={findName} filterFunction={changeFindName} />

      <h3>Add a new</h3>

      <PersonForm addPerson={addPerson} newName={newName} changeName={changeName} newNumber={newNumber} changeNumber={changeNumber} />

      <h3>Numbers</h3>

      <Persons personList={filteredPersons} />
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import Filter  from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import React from 'react';
import axois from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [findName, setFindName] = useState('')

  useEffect(() => {
    axois
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
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

      <Filter filterValue={findName} filterFunction={changeFindName} />

      <h3>Add a new</h3>

      <PersonForm addPerson={addPerson} newName={newName} changeName={changeName} newNumber={newNumber} changeNumber={changeNumber} />

      <h3>Numbers</h3>

      <Persons personList={filteredPersons}/>
    </div>
  )
}

export default App
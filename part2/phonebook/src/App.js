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
    let replacePerson = {}

    persons.forEach(person => {
      if (person.name === newName) {
        flag = false
        replacePerson = person
      }
    })

    const newPersonObject = {
      name: newName,
      number: newNumber,
      id: persons.at(-1).id + 1
    }

    if (flag) {
      connectService
        .addData(newPersonObject)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setNewName('')
          setNumber('')
      })
    } else {
      // Check whethe person information should update.
      if(window.confirm(`${newPersonObject.name} is already in the phonebook, replace the old number with a new one?`)) {
        
        connectService
          .replaceData(replacePerson.id, newPersonObject)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === replacePerson.id ? updatedPerson : person))
          })
          .catch(error => {
            alert('Warning! Update failed, Please check console')
          })
      }
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
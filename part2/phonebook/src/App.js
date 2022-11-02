import React, { useState, useEffect } from 'react'
import Filter  from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import connectService from './services/persons'
import Notification from './component/Notification'
import ErrorMessage from './component/ErrorMessage'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [findName, setFindName] = useState('')
  const [tipMessage, setTipMessage] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

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
          setTipMessage(`Add ${addedPerson.name} successful~`)
      })
    } else {
      // Check whethe person information should update.
      if(window.confirm(`${newPersonObject.name} is already in the phonebook, replace the old number with a new one?`)) {
        
        connectService
          .replaceData(replacePerson.id, newPersonObject)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === replacePerson.id ? updatedPerson : person))
            setTipMessage(`Update ${updatedPerson.name} successful~`)
          })
          .catch(error => {
            setErrorMsg(`Information of ${replacePerson.name} has already been removed from server!`)
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

      <ErrorMessage message={errorMsg} />

      <Notification message={tipMessage} />

      <Filter filterValue={findName} filterFunction={changeFindName} />

      <h3>Add a new</h3>

      <PersonForm addPerson={addPerson} newName={newName} changeName={changeName} newNumber={newNumber} changeNumber={changeNumber} />

      <h3>Numbers</h3>

      <Persons personList={filteredPersons} />
    </div>
  )
}

export default App
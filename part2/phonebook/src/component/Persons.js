import React, {useState, useEffect} from 'react'
import connectService from '../services/persons'

const Persons = ({ personList }) => {
    
    const [showPerson, setShowPerson] = useState([])

    useEffect(() => {
        setShowPerson([...personList])
    }, [personList])

    const deletePerson = (name, id) => {
      if (window.confirm(`Delete ${name} ?`)) {
        connectService
          .deleteData(id)
          .then(() => {
            const nextList = [...showPerson]
            setShowPerson(nextList.filter(person => person.id !== id))
          })
      } 
    }
    
    return (
        <>
          {
            showPerson.map((person, index) => {
                return <p key={index}>{person.name} {person.number} <button key={index} onClick={() => { deletePerson(person.name, person.id); } }>delete</button> </p>
            })
          }
        </>
    )
}

export default Persons
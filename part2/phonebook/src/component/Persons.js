import React from 'react';

const Persons = ({ personList }) => {
    return (
        <>
            {personList.map((person, index) => <p key={index}>{person.name} {person.number}</p>)}
        </>
    )
}

export default Persons
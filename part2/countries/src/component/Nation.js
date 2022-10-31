import React from 'react'

const Nation = ({ capital, area, languages, flags }) => {
    return (
        <>
        <p>capital {capital} </p>
        <p>area {area} </p>
        <p><b>languages</b></p>
        <ul>
            { Object.entries(languages).map((language, index) => <li key={index}>{language[1]}</li> ) }
        </ul>
        <img src={flags.png} alt="flag" />
        </>
    )
}

export default Nation
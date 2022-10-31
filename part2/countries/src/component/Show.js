import React from 'react'

const Show = ({ resultList }) => {
    if (resultList.length === 0) {
        return (
            <></>
        )
    } else if (resultList.length === 1) {
        const country = resultList[0]
        console.log(Object.entries(country.languages))
        return (
            <div>
                <h2>{country.name.common}</h2>
                <p>capital {country.capital} </p>
                <p>area {country.area} </p>
                <p><b>languages</b></p>
                <ul>
                    { Object.entries(country.languages).map((language, index) => <li key={index}>{language[1]}</li> ) }
                </ul>
                <img src={country.flags.png} alt="flag" />
            </div>
        )
    } else if (resultList.length <= 10) {
        const countryNameList = []
        resultList.forEach(countryObject => {
            countryNameList.push(countryObject.name.common)
        })
        return (
            <div>
                <ul>
                    { countryNameList.map((name, index) => <li key={index}>{name}</li>)}
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
}

export default Show
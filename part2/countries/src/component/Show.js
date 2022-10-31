import React, { useState } from 'react'
import Nation from './Nation'

const Show = ({ resultList }) => {
    if (resultList.length === 0) {
        return (
            <></>
        )
    } else if (resultList.length === 1) {
        const country = resultList[0]
        return (
            <div>
                <h2>{country.name.common}</h2>
                <Nation capital={country.capital} area={country.area} languages={country.languages} flags={country.flags} />
            </div>
        )
    } else if (resultList.length <= 10) {
        const tmpLst = new Array(resultList.length)
        const [detailList, setDetailList] = useState(tmpLst)
        const showNation = (index) => {
            const updated = [...detailList]
            console.log(updated)
            updated[index] = <Nation 
            capital={resultList[index].capital} 
            area={resultList[index].area} 
            languages={resultList[index].languages} 
            flags={resultList[index].flags}
            />

            setDetailList(updated)
        }
        const countryNameList = []
        resultList.forEach(countryObject => {
            countryNameList.push(countryObject.name.common)
        })
        return (
            <div>
                <ul>
                    { 
                      countryNameList.map((name, index) => {
                        return <li key={index}> {name} <button onClick={() => {showNation(index)}}>show</button> {detailList[index]}</li>
                      })
                    }
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
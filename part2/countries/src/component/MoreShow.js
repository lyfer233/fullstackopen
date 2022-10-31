import React, { useState } from 'react'
import Nation from './Nation'

const MoreShow = ({resultList}) => {

    const [detailList, setDetailList] = useState(Array(resultList.length))

    const showNation = (index) => {
        const updated = [...detailList]
        updated[index] = <Nation 
        capital={resultList[index].capital} 
        area={resultList[index].area} 
        languages={resultList[index].languages} 
        flags={resultList[index].flags}
        />

        setDetailList(updated)
    }

    const countryNameList = []
    console.log(resultList)
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
}

export default MoreShow
import React from 'react'
import OneShow from './OneShow'
import MoreShow from './MoreShow'

const Show = ({ resultList }) => {
    const Len = resultList.length
    return (
        <div>
            { Len === 0 && <></>}
            { Len === 1 && <OneShow country={resultList[0]} />}
            { Len > 1 && Len <= 10 && <MoreShow resultList={resultList}/> }
            { Len > 10 && <div>Too many matches, specify another filter</div> }
        </div>
    )
}

export default Show
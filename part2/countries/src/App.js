import { useState, useEffect } from 'react'
import React from 'react'
import axois from 'axios'
import Show from './component/Show'

const App = () => {
  const [text, setText] = useState('')
  const [countryList, setCountryList] = useState([])
  const [result, setResult] = useState('')

  useEffect(() => {
    axois
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountryList(response.data)
      })
  }, [])
  
  const filterFunction = (event) => {
    const nowText = event.target.value
    // filter country
    const showResult = []
    const lowerText = nowText.toLowerCase()

    countryList.forEach(country => {
      if (country.name.common.toLowerCase().includes(lowerText)) {
        showResult.push(country)
      }
    })

    setResult(showResult)
    setText(nowText)
  }

  return (
    <div>
      find countries <input value={text} onChange={filterFunction}/>
      <Show resultList={result} />
    </div>
  )
}

export default App
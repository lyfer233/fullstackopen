import React, {useState, useEffect} from 'react'
import Nation from './Nation'
import axois from 'axios'

const OneShow = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY

    const [temperature, setTemperature] = useState('')
    const [wind, setWind] = useState('')
    const [iconLink, setIconLink] = useState('')

    useEffect(() => {
        (async () => {
          const location = []

          await (async () => {
            const response = await axois.get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&appid=${api_key}`)
            if (response.data.length === 0) { // no data receive
                return
            }
            location.push(response.data[0].lat, response.data[0].lon)
          })()
          const weather_condition = await axois.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${api_key}`)
          if (weather_condition.status !== 200) { // error 
            return 
          }
          setTemperature(weather_condition.data.main.temp)
          setWind(weather_condition.data.wind.speed)
          setIconLink(`http://openweathermap.org/img/wn/${weather_condition.data.weather[0].icon}@2x.png`)
        })()
    }, [])

    return (
        <div>
            <h2>{country.name.common}</h2>
            <Nation capital={country.capital} area={country.area} languages={country.languages} flags={country.flags} />
            <h2>Weather in {country.capital}</h2>
            <p>temperature {temperature} Celcius</p>
            <img src={iconLink} alt='weather icon' />
            <p>wind {wind} m/s</p>
        </div>
    )
}

export default OneShow
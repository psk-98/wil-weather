import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { forecastHelper } from './helpers'
import Loader from './loader'
import axios from 'axios'

const Home = () => {
    const state = useSelector((state) => state)
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // const fetchWeather = async () => {
    //     try {
    //         const res = await axios.get(
    //             `https://api.weather.gov/gridpoints/MTR/84,105/forecast?units=${state.units}`
    //         )
    //         const { data } = res
    //         setWeather(data)
    //         setLoading(false)
    //     } catch (err) {
    //         console.log(err)
    //         setError(err)
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await axios.get(
                    `https://api.weather.gov/gridpoints/MTR/84,105/forecast?units=${state.units}`
                )
                const { data } = res
                setWeather(data)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setError(err)
                setLoading(false)
            }
        }
        fetchWeather()
    }, [state.units])

    return loading ? (
        <Loader />
    ) : error ? (
        <div className="error-msg lighter">{error?.message}!</div>
    ) : weather ? (
        <>
            <div className="main">
                <div className="main-temp">
                    <div className="current-temp">
                        {weather?.properties.periods[0].temperature}
                        <span>&#176;</span>
                        {weather?.properties.periods[0].temperatureUnit}
                    </div>

                    <div className="current-desc">
                        {weather?.properties.periods[0].detailedForecast}
                    </div>
                    <div className="current-date-time">
                        {weather?.properties.periods[0].name}
                    </div>
                </div>
                <div className="forecast">
                    <div className="forecast-details">
                        {forecastHelper(weather)}
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    )
}

export default Home

import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeUnits, fetchWeather } from "../actions/weather"
import { motion } from "framer-motion"

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
}

const Navbar = () => {
  const [isF, setIsF] = useState(false)
  const [city, setCity] = useState(null)
  const dispatch = useDispatch()

  const state = useSelector((state) => state)

  const { units } = state

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city !== null && city !== "") dispatch(fetchWeather(city))
  }

  const handleUnits = () => {
    setIsF(!isF)
    if (units === "metric") dispatch(changeUnits("imperial"))
    if (units === "imperial") dispatch(changeUnits("metric"))
    if (city !== null && city !== "") dispatch(fetchWeather(city))
  }

  const handleUnitsDisplay = () => {
    if (units === "metric") return <>C</>
    if (units === "imperial") return <>F</>
  }

  return (
    <div className="navbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {console.log(process.env.REACT_APP_OPENWEATHER_API_KEY)}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.9 }}
          transition={spring}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            viewBox="0 0 48 48"
          >
            <path d="m38.7 40.25-12.15-12.1q-1.5 1.3-3.475 2.025-1.975.725-4.125.725-5.1 0-8.625-3.525Q6.8 23.85 6.8 18.8q0-5 3.525-8.525Q13.85 6.75 18.9 6.75q5.05 0 8.575 3.525Q31 13.8 31 18.8q0 2.1-.725 4.1-.725 2-2.075 3.6l12.2 12.15q.35.35.35.8 0 .45-.4.8-.35.4-.85.4t-.8-.4Zm-19.75-11.6q4.05 0 6.9-2.875Q28.7 22.9 28.7 18.8t-2.85-6.95Q23 9 18.95 9q-4.15 0-7 2.85Q9.1 14.7 9.1 18.8t2.85 6.975q2.85 2.875 7 2.875Z" />
          </svg>
        </motion.button>
      </form>
      <div className="switch" data-isOn={isF} onClick={() => handleUnits()}>
        <motion.div className="handle" layout transition={spring}>
          {handleUnitsDisplay()}
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar

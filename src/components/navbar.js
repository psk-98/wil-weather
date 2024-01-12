import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUnits, fetchWeather } from '../actions/weather'
import { motion } from 'framer-motion'

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
}

const Navbar = () => {
    const [isF, setIsF] = useState(false)
    const dispatch = useDispatch()

    const state = useSelector((state) => state)

    const { units } = state

    const handleUnits = () => {
        setIsF(!isF)
        if (units === 'si') dispatch(changeUnits('us'))
        if (units === 'us') dispatch(changeUnits('si'))
    }

    const handleUnitsDisplay = () => {
        if (units === 'si') return <>C</>
        if (units === 'us') return <>F</>
    }

    return (
        <div className="navbar">
            <form></form>
            <div
                className="switch"
                data-isOn={isF}
                onClick={() => handleUnits()}
            >
                <motion.div className="handle" layout transition={spring}>
                    {handleUnitsDisplay()}
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar

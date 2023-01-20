import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { CHANGE_UNITS, FETCH_WEATHER } from "./type"

export const fetchWeather = createAsyncThunk(
  FETCH_WEATHER,
  async (city, { rejectWithValue, getState, dispatch }) => {
    if (city !== null) {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`,
        )
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${
            res.data.coord.lat
          }&lon=${res.data.coord.lon}&units=${
            getState().units
          }&exclude=minutely,hourly,alerts&appid=${
            process.env.OPEN_WEATHER_API_KEY
          }`,
        )
        return { data, res }
      } catch (err) {
        if (!err?.response) {
          throw err
        }
        return rejectWithValue(err?.response?.data)
      }
    }
  },
)
export const changeUnits = createAsyncThunk(CHANGE_UNITS, async (unit) => {
  return unit
})

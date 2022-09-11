import { configureStore } from "@reduxjs/toolkit"
import { weatherSlice } from "../reducers/weather"


export const store = configureStore({
    reducer: weatherSlice.reducer
})
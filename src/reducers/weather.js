//slices
import { createSlice } from '@reduxjs/toolkit'
import { changeUnits } from '../actions/weather'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        units: 'si',
        weather: false,
    },
    extraReducers: (builder) => {
        builder.addCase(changeUnits.fulfilled, (state, action) => {
            state.units = action?.payload
        })
    },
})

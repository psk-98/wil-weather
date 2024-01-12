import { createAsyncThunk } from '@reduxjs/toolkit'
import { CHANGE_UNITS } from './type'

export const changeUnits = createAsyncThunk(CHANGE_UNITS, async (unit) => {
    return unit
})

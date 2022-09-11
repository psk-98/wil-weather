//slices
import { createSlice } from "@reduxjs/toolkit";
import { changeUnits, fetchWeather } from "../actions/weather";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    units: "metric",
    weather: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action?.payload.data;
      state.name = action?.payload.res.data.name;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.weather = false;
      state.loading = false;
      state.error = action?.payload;
    });
    builder.addCase(changeUnits.fulfilled, (state, action) => {
      state.units = action?.payload;
    });
  },
});

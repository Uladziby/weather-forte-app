import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const weatherSlice = createSlice({
  name: "currentWeatherSlice",
  initialState: initialState,
  reducers: {
    setWeather(state, action) {
      state.weather = action.payload;
    },
  },
});

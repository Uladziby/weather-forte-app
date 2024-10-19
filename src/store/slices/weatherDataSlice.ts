import { fetchCurrentWeatherByCoords } from "../../api/fetchWeatherByLocation";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { fetchCoordinatesByName } from "../../api/fetchWeatherByLocation";

const weatherDataSlice = createSlice({
  name: "weatherDataSlice",
  initialState: initialState,
  reducers: {
    setWeather(state, action) {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoordinatesThunk.fulfilled, (state, action) => {
      state.currentCoordinates = action.payload[0];
    });
    builder.addCase(fetchCurrentWeatherThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      state.weather = action.payload;
    });
  },
});

export const fetchCoordinatesThunk = createAsyncThunk(
  "weatherDataSlice/fetchCoordinatesThunk",
  async (location: string) => fetchCoordinatesByName(location)
);

export const fetchCurrentWeatherThunk = createAsyncThunk(
  "weatherDataSlice/fetchCurrentWeatherThunk",
  async () => fetchCurrentWeatherByCoords(initialState.currentCoordinates)
);

export default weatherDataSlice.reducer;

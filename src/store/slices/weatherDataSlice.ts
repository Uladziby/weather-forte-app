import { fetchCurrentWeatherByCoords } from "../../api/fetchWeatherByLocation";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { fetchCoordinatesByName } from "../../api/fetchWeatherByLocation";
import { CoordsType } from "../type";

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
  async (coords: CoordsType) => {
    return fetchCurrentWeatherByCoords(coords);
  }
);

export default weatherDataSlice.reducer;

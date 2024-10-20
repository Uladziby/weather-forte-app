import { fetchCurrentWeatherByCoords } from "../../api/fetchWeatherByLocation";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { fetchCoordinatesByName } from "../../api/fetchWeatherByLocation";
import { CoordsType } from "../type";

const weatherDataSlice = createSlice({
  name: "weatherDataSlice",
  initialState: initialState,
  reducers: {
    addFavoriteLocation(state, action) {
      state.favoriteList = [...state.favoriteList, action.payload];
    },
    removeFavoriteLocation(state, action) {
      state.favoriteList = state.favoriteList.filter(
        (location) => location.name !== action.payload
      );
      console.log(state.favoriteList);
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
export const { addFavoriteLocation, removeFavoriteLocation } =
  weatherDataSlice.actions;

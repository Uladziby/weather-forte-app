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
      localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
    },
    removeFavoriteLocation(state, action) {
      state.favoriteList = state.favoriteList.filter(
        (location) => location.name !== action.payload
      );
      localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
    },
    setError(state, action) {
      state.Errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoordinatesThunk.fulfilled, (state, action) => {
      state.currentCoordinates = action.payload[0];
    });
    builder.addCase(fetchCoordinatesThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoordinatesThunk.rejected, (state, action) => {
      state.Errors = action.error.message || "Error";
      state.isLoading = false;
    });
    builder.addCase(fetchCurrentWeatherThunk.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCurrentWeatherThunk.pending, (state) => {
      state.isLoading = true;
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
export const { addFavoriteLocation, removeFavoriteLocation, setError } =
  weatherDataSlice.actions;

import { RootState } from ".";

export const selectWeatherData = (state: RootState) =>
  state.weatherData.weather;
export const selectFavoriteList = (state: RootState) =>
  state.weatherData.favoriteList;

export const selectCurrentCoordinates = (state: RootState) =>
  state.weatherData.currentCoordinates;

export const selectIsLoading = (state: RootState) =>
  state.weatherData.isLoading;
export const selectErrors = (state: RootState) => state.weatherData.Errors;

export const selectWeatherSlice = (state: RootState) => state.weatherData;

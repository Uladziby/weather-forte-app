import { RootState } from ".";

export const selectWeatherData = (state: RootState) =>
  state.weatherData.weather;
export const selectFavoriteList = (state: RootState) =>
  state.weatherData.favoriteList;

export const selectCurrentCoordinates = (state: RootState) =>
  state.weatherData.currentCoordinates;

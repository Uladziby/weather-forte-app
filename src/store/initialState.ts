import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { FavoriteLocation, ResponseCurrentWeather, State } from "./type";

export const responseWeather: ResponseCurrentWeather = {
  weather: [],
  base: "",
  coord: { lon: 0, lat: 0 },
  main: {
    temp: 0,
    humidity: 0,
  },
  wind: {
    speed: 0,
    deg: 0,
  },
  dt: 0,
  id: 0,
  name: "",
};

export const initialState: State = {
  weather: responseWeather,
  currentCoordinates: { lon: 0, lat: 0 },
  isLoading: false,
  Errors: "",
  favoriteList: JSON.parse(
    getFromLocalStorage("favoriteList") || "[]"
  ) as FavoriteLocation[],
};

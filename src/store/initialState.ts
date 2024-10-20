import { ResponseCurrentWeather, State } from "./type";

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
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: "",
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
};

export const initialState: State = {
  weather: responseWeather,
  currentCoordinates: { lon: 0, lat: 0 },
  favoriteList: [],
};

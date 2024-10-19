import { ResponseCurrentWeather } from "./type";

export const initialState: ResponseCurrentWeather = {
  weather: [],
  base: "",
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

import { ResponseCurrentWeather } from "../store/type";
import { fetchData } from "../utils/fetchData";
import { REQUEST_ENDPOINTS } from "../utils/requestEndpoints";
import { ResponseCoordinates } from "./types";

export const fetchCoordinatesByName = (
  loaction: string
): Promise<ResponseCoordinates[]> => {
  return fetchData(
    `${REQUEST_ENDPOINTS.coordinates}?q=${loaction}&appid=${process.env.REACT_APP_WEATHER_API}`
  );
};

export const fetchCurrentWeatherByCoords = ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): Promise<ResponseCurrentWeather> => {
  return fetchData(
    `${REQUEST_ENDPOINTS.currentWeatherByCoordinates}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}`
  );
};

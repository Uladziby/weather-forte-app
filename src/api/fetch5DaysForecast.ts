import { fetchData } from "../utils/fetchData";
import { REQUEST_ENDPOINTS } from "../utils/requestEndpoints";
import { Response5DaysForecast } from "./types";

export const fetch5DaysForecast = ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): Promise<Response5DaysForecast> => {
  return fetchData(
    `${REQUEST_ENDPOINTS.forecast5Days}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}`
  );
};

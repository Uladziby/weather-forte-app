import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CloudOff, CloudRain, Cloudy, Star, Sun } from "lucide-react";
import { ATitle } from "../ATitle/ATitle";
import { CURRENT_WEATHER_TITLE } from "../../utils/constants";
import { WeatherDescription } from "./Parts/WeatherDescription";
import { selectFavoriteList, selectWeatherData } from "../../store/selectors";
import { ForecastMenu } from "./Parts/ForecastMenu/ForecastMenu";
import { useAppDispatch } from "../../store";
import {
  addFavoriteLocation,
  removeFavoriteLocation,
} from "../../store/slices/weatherDataSlice";
import "./styles.css";

export const WeatherCard = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isShowForecast, setIsShowForecast] = useState<boolean>(false);
  const { weather, main, wind, name, coord } = useSelector(selectWeatherData);
  const favoriteList = useSelector(selectFavoriteList);
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    const isExistLocation = favoriteList.find((item) => item.name === name);

    if (!isExistLocation) {
      dispatch(addFavoriteLocation({ name, lat: coord.lat, lon: coord.lon }));
      setIsFavorite(true);
    } else {
      dispatch(removeFavoriteLocation(name));
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    const isExistLocation = favoriteList.find((item) => item.name === name);

    setIsFavorite(!!isExistLocation);
  }, [name, favoriteList]);

  const handleToggleShowForecast = () => {
    setIsShowForecast((prev) => !prev);
  };

  const icons: { [key: string]: JSX.Element } = {
    Clouds: <Cloudy size={50} color="#494954" fill="#494954" />,
    Rain: <CloudRain size={50} color="#090cbf" />,
    Clear: <Sun size={50} color="#eab412eb" />,
    NoData: <CloudOff size={50} color="black" />,
  };

  const weatherIcon = weather[0] ? weather[0].main : "NoData";

  return (
    <>
      <ATitle styles={{ textAlign: "center" }}>{CURRENT_WEATHER_TITLE}</ATitle>
      <div className="weather-dashboard">
        <div className="weather">
          <div className="city">
            <ATitle styles={{ color: "black" }}>{name}</ATitle>
            <div className="weather-status">{icons[weatherIcon]}</div>
          </div>
          <div className="weather-error"></div>
          <div className="details">
            {weather[0] ? (
              <WeatherDescription
                temperature={main.temp}
                weather={weather[0].description}
                wind={wind.speed}
                humidity={main.humidity}
              />
            ) : (
              <span> No Data </span>
            )}

            <div className="details_button">
              <button
                className={`button_favorite ${isFavorite ? "active" : ""}`}
                onClick={handleFavorite}
              >
                <Star size={30} color="#6366f1" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
        <button className="button_forecast" onClick={handleToggleShowForecast}>
          Show Forecast
        </button>
      </div>
      <ForecastMenu isActive={isShowForecast} />
    </>
  );
};

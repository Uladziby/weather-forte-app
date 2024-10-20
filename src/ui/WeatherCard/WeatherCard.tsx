import { useState } from "react";
import { useSelector } from "react-redux";
import { CloudOff, CloudRain, Cloudy, Star, Sun } from "lucide-react";
import { ATitle } from "../ATitle/ATitle";
import { CURRENT_WEATHER_TITLE } from "../../utils/constants";
import { WeatherDescription } from "./Parts/WeatherDescription";
import { selectWeatherData } from "../../store/selectors";
import "./styles.css";
import { ForecastMenu } from "./Parts/ForecastMenu/ForecastMenu";

export const WeatherCard = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isShowForecast, setIsShowForecast] = useState<boolean>(false);
  const { weather, main, wind, name } = useSelector(selectWeatherData);

  const handleFavorite = () => {
    setIsActive(!isActive);
  };

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
                weather={weather[0].main}
                wind={wind.speed}
                humidity={main.humidity}
              />
            ) : (
              <span> No Data </span>
            )}

            <div className="details_button">
              <button
                className={`button_favorite ${isActive ? "active" : ""}`}
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

import { useState } from "react";
import "./styles.css";
import { CloudRain, Cloudy, Star, Sun } from "lucide-react";
import { ATitle } from "../ATitle/ATitle";
import { CURRENT_WEATHER_TITLE } from "../../utils/constants";
import { WeatherDescription } from "./Parts/WeatherDescription";

export const WeatherCard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFavorite = () => {
    setIsActive(!isActive);
  };

  const icons = {
    cloudy: <Cloudy size={50} color="#494954" fill="#494954" />,
    rain: <CloudRain size={50} color="#090cbf" />,
    clear: <Sun size={50} color="#eab412eb" />,
  };

  return (
    <>
      <ATitle>{CURRENT_WEATHER_TITLE}</ATitle>
      <div className="weather-dashboard">
        <div className="weather">
          <div className="city">
            <ATitle styles={{ color: "black" }}>Moscow</ATitle>
            <div className="weather-status">{icons["clear"]}</div>
          </div>
          <div className="weather-error"></div>
          <div className="details">
            <WeatherDescription
              temperature={44}
              weather={"Cloudy"}
              wind={30}
              humidity={78}
            />
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
      </div>
    </>
  );
};

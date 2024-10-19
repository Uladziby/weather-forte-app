import { useState } from "react";
import "./styles.css";
import { Star } from "lucide-react";
import { ATitle } from "../ATitle/ATitle";
import { CURRENT_WEATHER_TITLE } from "../../utils/constants";

export const WeatherCard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFavorite = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <ATitle>{CURRENT_WEATHER_TITLE}</ATitle>
      <div className="weather-dashboard">
        <div className="weather">
          <div className="city">
            <span>Moscow</span>
            <div> icon </div>
          </div>
          <i className="weather-icon owf"></i>
          <div className="weather-error"></div>
          <div className="description-container">
            <span className="temperature"> temperature : 24 C</span>
            <span className="weather-description"></span>
          </div>
          <div className="wind">wind : 25m/s</div>
          <div className="humidity">humindity : 80%</div>
        </div>
        <div>
          <button
            className={`button_favorite ${isActive ? "active" : ""}`}
            onClick={handleFavorite}
          >
            <Star size={30} color="grey" strokeWidth={2} />
          </button>
        </div>
      </div>
    </>
  );
};

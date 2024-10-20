import { transformTemperatureToCelsius } from "../../../utils/transformTemperature";
import "./styles.css";

export const WeatherDescription = ({
  temperature,
  weather,
  wind,
  humidity,
}: {
  temperature: number;
  weather: string;
  wind: number;
  humidity: number;
}) => {
  return (
    <div className="details_description">
      <span className="details_description-item">
        temperature : {transformTemperatureToCelsius(temperature)} C
      </span>
      <span className="details_description-item">weather: {weather}</span>
      <div className="details_description-item">wind : {wind} m/s</div>
      <div className="details_description-item">humindity : {humidity}%</div>
    </div>
  );
};

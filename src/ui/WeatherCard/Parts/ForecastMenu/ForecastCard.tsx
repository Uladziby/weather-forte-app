import { Cloudy, CloudRain, Sun, CloudOff } from "lucide-react";
import { ForecastDataProps } from "../../../../api/types";
import { transformTemperatureToCelsius } from "../../../../utils/transformTemperature";
import { formatDate } from "../../../../utils/formatData";

export const ForecastCard = ({ forecast }: ForecastDataProps) => {
  const icons: { [key: string]: JSX.Element } = {
    Clouds: <Cloudy size={50} color="#494954" fill="#494954" />,
    Rain: <CloudRain size={50} color="#090cbf" />,
    Clear: <Sun size={50} color="#eab412eb" />,
    NoData: <CloudOff size={50} color="black" />,
  };

  return (
    <div className="forecast-card">
      <div className="forecast-card__left-date">
        {formatDate(forecast.dt_txt)}
      </div>

      <div className="forecast-card__right">
        <span>{transformTemperatureToCelsius(forecast.main.temp)}°C</span>
        <div>{icons[forecast.weather[0].main]}</div>
        <div className="forecast-card__right-description ">
          {forecast.weather[0].description}
        </div>
      </div>
    </div>
  );
};

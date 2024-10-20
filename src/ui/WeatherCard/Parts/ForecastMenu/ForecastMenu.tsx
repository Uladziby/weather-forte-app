import { useEffect, useState } from "react";
import { fetch5DaysForecast } from "../../../../api/fetch5DaysForecast";
import { ForecastType } from "api/types";
import "./styles.css";
import { ForecastCard } from "./ForecastCard";

export const ForecastMenu = ({
  isActive,
  coords,
}: {
  isActive: boolean;
  coords: { lat: number; lon: number };
}) => {
  const [forecast, setForecast] = useState<ForecastType[] | null>(null);

  useEffect(() => {
    fetch5DaysForecast(coords).then((res) => {
      const filteredForecast = res.list.filter((forecast) =>
        forecast.dt_txt.includes("12:00:00")
      );
      setForecast(filteredForecast);
    });
  }, [coords]);

  return (
    <div className={`forecast_menu ${isActive ? "open" : "close"}`}>
      {forecast?.map((forecast) => {
        return <ForecastCard key={forecast.dt_txt} forecast={forecast} />;
      })}
    </div>
  );
};

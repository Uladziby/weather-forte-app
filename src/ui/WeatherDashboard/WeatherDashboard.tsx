import { CitySearch } from "../SearchBar/SearchBar";
import { FavoriteList } from "../FavoriteLIst/FavoriteList";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import "./styles.css";

export const WeatherDashboard = () => {
  return (
    <div className="container">
      <CitySearch />
      <WeatherCard />
      <FavoriteList />
    </div>
  );
};

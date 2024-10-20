import { CitySearch } from "../SearchBar/SearchBar";
import { FavoriteList } from "../FavoriteLIst/FavoriteList";
import { WeatherCard } from "../WeatherCard/WeatherCard";

export const WeatherDashboard = () => {
  return (
    <>
      <CitySearch />
      <WeatherCard />
      <FavoriteList />
    </>
  );
};

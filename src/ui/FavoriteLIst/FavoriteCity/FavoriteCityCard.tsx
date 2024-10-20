import { Star } from "lucide-react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import {
  fetchCurrentWeatherThunk,
  removeFavoriteLocation,
} from "store/slices/weatherDataSlice";
import { selectFavoriteList } from "store/selectors";
import "./styles.css";

export const FavoriteCityCard = ({ location }: { location: string }) => {
  const dispatch = useAppDispatch();
  const favoriteList = useSelector(selectFavoriteList);

  const handleFavorite = () => {
    dispatch(removeFavoriteLocation(location));
  };

  const handlerChangeLocation = () => {
    const chosenCity = favoriteList.find((item) => item.name === location);

    if (chosenCity) {
      const { lat, lon } = chosenCity;

      dispatch(fetchCurrentWeatherThunk({ lat, lon }));
    }
  };

  return (
    <div className="favorite-city">
      <button
        className="favorite-city_location"
        onClick={handlerChangeLocation}
      >
        <h2>{location}</h2>
      </button>
      <button className="button_favorite active" onClick={handleFavorite}>
        <Star size={30} color="#6366f1" strokeWidth={2} />
      </button>
    </div>
  );
};

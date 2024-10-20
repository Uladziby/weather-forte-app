import { useState } from "react";
import { Star } from "lucide-react";
import "./styles.css";
import { useAppDispatch } from "../../../store";
import { removeFavoriteLocation } from "../../../store/slices/weatherDataSlice";

export const FavoriteCityCard = ({ location }: { location: string }) => {
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(removeFavoriteLocation(location));
  };

  return (
    <div className="favorite-city">
      <button className="favorite-city_location">
        <h2>{location}</h2>
      </button>
      <button className={`button_favorite active`} onClick={handleFavorite}>
        <Star size={30} color="#6366f1" strokeWidth={2} />
      </button>
    </div>
  );
};

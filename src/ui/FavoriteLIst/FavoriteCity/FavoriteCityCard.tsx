import { useState } from "react";
import { Star } from "lucide-react";
import "./styles.css";

export const FavoriteCityCard = ({ location }: { location: string }) => {
  const [isActive, setIsActive] = useState(true);

  const handleFavorite = () => {
    setIsActive(!isActive);
  };
  return (
    <button className="favorite-city">
      <h2>{location}</h2>
      <button
        className={`button_favorite ${isActive ? "active" : ""}`}
        onClick={handleFavorite}
      >
        <Star size={30} color="#6366f1" strokeWidth={2} />
      </button>
    </button>
  );
};

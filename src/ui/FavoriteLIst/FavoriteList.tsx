import { useSelector } from "react-redux";
import { ATitle } from "../ATitle/ATitle";
import { FavoriteCityCard } from "./FavoriteCity/FavoriteCityCard";
import { selectFavoriteList } from "store/selectors";
import { FAVORITE_LIST_TITLE } from "../../utils/constants";
import "./styles.css";

export const FavoriteList = () => {
  const favoriteList = useSelector(selectFavoriteList);

  return (
    <>
      <ATitle styles={{ textAlign: "center" }}>{FAVORITE_LIST_TITLE}</ATitle>
      <ul className="favorite_list">
        {favoriteList.map(({ name }) => (
          <li key={name}>
            <FavoriteCityCard location={name} />
          </li>
        ))}
      </ul>
    </>
  );
};

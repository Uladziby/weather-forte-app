import { FAVORITE_LIST_TITLE } from "../../utils/constants";
import { ATitle } from "../ATitle/ATitle";
import { FavoriteCityCard } from "./FavoriteCity/FavoriteCityCard";
import "./styles.css";

export const FavoriteList = () => {
  return (
    <>
      <ATitle styles={{ textAlign: "center" }}>{FAVORITE_LIST_TITLE}</ATitle>
      <ul className="favorite_list">
        <li>
          <FavoriteCityCard location="London" />
        </li>
        <li>
          <FavoriteCityCard location="Rome" />
        </li>
        <li>
          <FavoriteCityCard location="Paris" />
        </li>
      </ul>
    </>
  );
};

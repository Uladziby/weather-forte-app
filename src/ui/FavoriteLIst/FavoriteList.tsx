import { FAVORITE_LIST_TITLE } from "../../utils/constants";
import { ATitle } from "../ATitle/ATitle";

export const FavoriteList = () => {
  return (
    <>
      <ATitle>{FAVORITE_LIST_TITLE}</ATitle>
      <div className="favorite-list">
        <ul>
          <li>City 1</li>
          <li>City 2</li>
          <li>City 3</li>
        </ul>
      </div>
    </>
  );
};

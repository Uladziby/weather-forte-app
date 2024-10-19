import { useState } from "react";
import { SEARCH_BAR_TITLE } from "../../utils/constants";
import { ATitle } from "../ATitle/ATitle";
import { AInputSearch } from "../AInputSearch/AInputSearch";
import "./styles.css";

export const CitySearch = () => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) {
      console.log(`Searching for weather in ${city}`);
    }
  };

  return (
    <>
      <ATitle>{SEARCH_BAR_TITLE}</ATitle>
      <div className="location_search">
        <AInputSearch />
        <button onClick={handleSearch}>Search & Add</button>
      </div>
    </>
  );
};

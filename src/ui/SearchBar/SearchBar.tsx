import { useState } from "react";
import { SEARCH_BAR_TITLE } from "../../utils/constants";
import { ATitle } from "../ATitle/ATitle";

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
      <div className="city-search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search & Add</button>
      </div>
    </>
  );
};

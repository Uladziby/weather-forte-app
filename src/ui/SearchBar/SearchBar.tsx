import { useState } from "react";
import { SEARCH_BAR_TITLE } from "../../utils/constants";
import { ATitle } from "../ATitle/ATitle";
import { AInputSearch } from "../AInputSearch/AInputSearch";
import "./styles.css";
import { useAppDispatch } from "../../store";
import {
  fetchCoordinatesThunk,
  fetchCurrentWeatherThunk,
} from "../../store/slices/weatherDataSlice";

export const CitySearch = () => {
  const dispatch = useAppDispatch();

  const [city, setCity] = useState<string>("");

  const handleSearch = async () => {
    if (city) {
      await dispatch(fetchCoordinatesThunk(city));
      await dispatch(fetchCurrentWeatherThunk());
    }
  };

  const handleChange = (query: string) => {
    setCity(query);
  };

  return (
    <>
      <ATitle styles={{ textAlign: "center" }}>{SEARCH_BAR_TITLE}</ATitle>
      <div className="location_search">
        <AInputSearch
          onChange={(e) => {
            const query = e.target.value;
            handleChange(query);
          }}
        />
        <button onClick={handleSearch}>Search & Add</button>
      </div>
    </>
  );
};

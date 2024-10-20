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
  const [city, setCity] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSearch = async () => {
    if (city) {
      await dispatch(fetchCoordinatesThunk(city)).then(async (res) => {
        const { lat, lon } = (res.payload as { lat: number; lon: number }[])[0];
        await dispatch(fetchCurrentWeatherThunk({ lat, lon }));
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <>
      <ATitle styles={{ textAlign: "center" }}>{SEARCH_BAR_TITLE}</ATitle>
      <div className="location_search">
        <AInputSearch onChange={handleChange} />
        <button className="button_search" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

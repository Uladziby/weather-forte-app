import { useRef, useState } from "react";
import { ERROR_MESSAGE } from "../../utils/constants";
import { AInputSearch } from "../AInputSearch/AInputSearch";
import "./styles.css";
import { useAppDispatch } from "../../store";
import {
  fetchCoordinatesThunk,
  fetchCurrentWeatherThunk,
  setError,
} from "../../store/slices/weatherDataSlice";
import { useSelector } from "react-redux";
import { selectErrors } from "../../store/selectors";

export const CitySearch = () => {
  const [city, setCity] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const error = useSelector(selectErrors);

  const handleSearch = async () => {
    dispatch(setError(""));

    if (city) {
      await dispatch(fetchCoordinatesThunk(city))
        .then(async (res) => {
          const { lat, lon } = (
            res.payload as { lat: number; lon: number }[]
          )[0];
          await dispatch(fetchCurrentWeatherThunk({ lat, lon }));
        })
        .catch(() => {
          dispatch(setError(ERROR_MESSAGE));
        });
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="location_search">
      <div className="">
        <AInputSearch onChange={handleChange} ref={inputRef} />
        <button className="button_search" onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && <span className="search_error">{error}</span>}
    </div>
  );
};

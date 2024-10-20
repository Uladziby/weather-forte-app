export type ResponseCurrentWeather = {
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
  base: string;
  coord: { lon: number; lat: number };
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dt: number;
  id: number;
  name: string;
};

export type State = {
  weather: ResponseCurrentWeather;
  currentCoordinates: { lon: number; lat: number };
  favoriteList: FavoriteLocation[];
  isLoading: boolean;
  Errors: string;
};

export type FavoriteLocation = {
  name: string;
  lon: number;
  lat: number;
};

export type CoordsType = {
  lon: number;
  lat: number;
};

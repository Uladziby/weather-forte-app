export type ResponseCurrentWeather = {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
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
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type State = {
  weather: ResponseCurrentWeather;
  currentCoordinates: { lon: number; lat: number };
  favoriteList: FavoriteLocation[];
  isLoading: boolean;
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

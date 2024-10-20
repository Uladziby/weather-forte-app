export type Response5DaysForecast = {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      main: string;
    }[];
  }[];
};

export type ForecastType = {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    main: string;
  }[];
};

export type ForecastDataProps = {
  forecast: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      main: string;
    }[];
  };
};

export type ResponseCoordinates = {
  lat: number;
  lon: number;
};

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import weatherDataSlice from "./slices/weatherDataSlice";

export const rootReducer = combineReducers({
  weatherData: weatherDataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

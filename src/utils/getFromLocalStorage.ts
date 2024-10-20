export const getFromLocalStorage = (key: string, fallbackValue = ""): string =>
  localStorage.getItem(key) || fallbackValue;

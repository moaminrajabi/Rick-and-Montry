import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialState
  );
  useEffect(() => {
    localStorage.setItem(value, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

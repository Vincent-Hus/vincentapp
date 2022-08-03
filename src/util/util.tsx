import { useState, useEffect } from "react";

export const useDebounce = <V extends {}>(value: V, delay?: number) => {
  const [debounceValue, setdebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setdebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};

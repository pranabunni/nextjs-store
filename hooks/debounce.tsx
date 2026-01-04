import {useEffect, useState} from "react";

export const useDebounce = (value: string, delay = 1000) => {
  const [debounce, setDebounce]  = useState(value);
    useEffect(() => {
      const timeOut = setTimeout(() => {
          setDebounce(value);
          console.log('value', value);
      }, delay);
      return () => clearTimeout(timeOut);
    }, [value, delay]);
    return debounce;
};
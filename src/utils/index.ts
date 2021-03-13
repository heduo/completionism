import { useEffect, useState } from "react";
// convert value to boolean type
// IMPORTANT
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

// it's bad to change a obj when it's passed to a function
// IMPORTANT
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // should keep key is 0, but not 'false', 'undefined'
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

// custom hooks
export const useMounted = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // once value is changed, set a timeout
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // run every time previous useEffect finish
    return () => clearTimeout(timeout);
  }, [value]);

  return debouncedValue;
};

// debounce
// IMPORTANT
// const debounce = (fn, delay) => {
//     let timeout;
//     return (...param) => {
//         if (timeout) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(function () {
//             fn(...param);
//         }, delay);
//     }
// }

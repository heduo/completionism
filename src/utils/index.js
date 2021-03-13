import {useEffect, useState} from 'react';
// convert value to boolean type 
// IMPORTANT
export const isFalsy = (value) => value === 0 ? false : !value; 

// it's bad to change a obj when it's passed to a function   
// IMPORTANT
export const cleanObject = (object) => {
    const result = {...object}
    Object.keys(result).forEach(key => {
        const value = result[key];
        if (isFalsy(value)) { // should keep key is 0, but not 'false', 'undefined'
            delete result[key];
        }
    });
    return result;
}

// custom hooks
export const useMounted = (callback) => {
    useEffect(() => {
        callback()
    }, []);
}

export const useDebounce = (value, delay) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
    // once value is changed, set a timeout
     const timeout = setTimeout(()=> setDebouncedValue(value), delay);
     // run every time previous useEffect finish
     return () => clearTimeout(timeout);
    }, [value]);

    return debouncedValue;
}

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
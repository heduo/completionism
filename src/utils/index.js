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
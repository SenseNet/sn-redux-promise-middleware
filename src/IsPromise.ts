/**
 * Method checking if the given object is a Promise or not.
 * @param obj {object} The object that should be checked.
 */
export const isPromise = (obj) => Promise.resolve(obj) === obj

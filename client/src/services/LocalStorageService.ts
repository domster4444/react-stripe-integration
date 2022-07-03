//todo ________________________LOCAL STORAGE SERVICE __________________________----

//* =========================== store data in local storage
/**
 * It takes a key and a value, and stores the value in localStorage using the key.
 * @param {string} key - string - The key to store the data under
 * @param {string} value - string
 */
export const storeDataByValue: Function = (
  key: string,
  value: string
): void => {
  localStorage.setItem(key, value);
};

/**
 * This function takes a key and an object as parameters, and stores the object in localStorage with
 * the key as the key.
 * @param {string} key - string - The key to store the data under
 * @param {object} objParam - object
 */
export const storeDataByObj: Function = (
  key: string,
  objParam: object
): void => {
  localStorage.setItem(key, JSON.stringify(objParam));
};

//*=========================== get data from local storage
/**
 * It returns the data stored in localStorage by the key passed to it
 * @param {string} key - The key of the data you want to retrieve.
 * @returns A function that takes a string and returns a string or null.
 */
export const getDataByValue: Function = (key: string): string | null => {
  return localStorage.getItem(key); //? either returns data or null , so no tension like in cookie
};

/**
 * It returns the data stored in localStorage with the key passed as an argument.
 * @param {string} key - string - the key of the data you want to get
 */
export const getDataByObj: Function = (key: string): object | null => {
  //! we get null if there is no key in LS with name "token" , so  we use  string | null
  //@ts-ignore
  return JSON.parse(localStorage.getItem(key)); //? either returns data or null , so no tension like in cookie
};

//*=========================== delete data from local storage
/**
 * This function deletes data from local storage.
 * @param {string} key - string - The key of the data you want to delete.
 */
export const deleteData: Function = (key: string): void => {
  localStorage.removeItem(key);
};

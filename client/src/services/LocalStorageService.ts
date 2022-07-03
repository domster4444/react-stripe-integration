//todo ________________________LOCAL STORAGE SERVICE __________________________----

//* =========================== store data in local storage
export const storeDataByValue: Function = (
  key: string,
  value: string
): void => {
  localStorage.setItem(key, value);
};

export const storeDataByObj: Function = (
  key: string,
  objParam: object
): void => {
  localStorage.setItem(key, JSON.stringify(objParam));
};

//*=========================== get data from local storage
export const getDataByValue: Function = (key: string): string | null => {
  return localStorage.getItem(key); //? either returns data or null , so no tension like in cookie
};

export const getDataByObj: Function = (key: string): object | null => {
  //! we get null if there is no key in LS with name "token" , so  we use  string | null
  //@ts-ignore
  return JSON.parse(localStorage.getItem(key)); //? either returns data or null , so no tension like in cookie
};

//*=========================== delete data from local storage
export const deleteData: Function = (key: string): void => {
  localStorage.removeItem(key);
};

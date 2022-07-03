//? no need to delete cookie and store updated cookie, on cookie.set it automatically updates on real time

import cookie from 'js-cookie';

//? store data in cookie
export const storeDataByValue: Function = (
  key: string,
  value: string
): void => {
  if (window !== undefined) {
    cookie.set(key, value, {
      expires: 1, //* expires in 1 day
    });
  }
};
export const storeDataByObj: Function = (key: string, obj: object): void => {
  if (window !== undefined) {
    cookie.set(key, JSON.stringify(obj), {
      expires: 1, //* expires in 1 day
    });
  }
};

//? get data of cookie
export const getDataByValue: Function = (
  key: string
): string | undefined | null => {
  if (window !== undefined && cookie.get(key)) {
    return cookie.get(key); //* returns undefined if key is not found so, check it in <<  if (window !== undefined && cookie.get(key)) {>>
  }
  return null; //* if either any of window is undefined or cookie.get(key) is undefined then return null explicitly
};
export const getDataByObj: Function = (
  key: string
): object | undefined | null => {
  if (window !== undefined && cookie.get(key)) {
    //@ts-ignore
    return JSON.parse(cookie.get(key)); //* returns undefined if key is not found so, check it in <<  if (window !== undefined && cookie.get(key)) {>>
  }
  return null; //* if either any of window is undefined or cookie.get(key) is undefined then return null explicitly
};

//? delete cookie
export const deleteData: Function = (key: string): void => {
  if (window !== undefined) {
    cookie.remove(key);
  }
};

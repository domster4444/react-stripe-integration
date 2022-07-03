//! function that takes care of where to store user data & token after login & register
//? middleware that takes response , parse it's data, stores some data
// ?in localstorage and some in cookie , then invoke callback function

import { storeDataByValue as storeCookieDataByVal } from 'services/Cookie';
import { storeDataByObj as storeLocalStorageDataByObj } from 'services/LocalStorageService';
import { deleteData as deleteCookieData } from 'services/Cookie';
import { deleteData as deleteLocalStorageData } from 'services/LocalStorageService';

const DataStorageMiddleware: Function = (
  serverResponse: any,
  next: Function
): void => {
  console.log('🅿️ serverResponse in AuthStorageMiddleware: ', serverResponse);
  //* STORE Token in cookie
  storeCookieDataByVal('token', serverResponse.data.token);
  //* STORE User data in localstorage
  storeLocalStorageDataByObj('user', serverResponse.data.data);

  next();
};

//! Middleware Function that removes user data from localstorage and token from cookie ,
//! this function is called when user logs out

const DataRemovalMiddleware: Function = (next: Function): void => {
  console.log('🅿️ DataRemovalMiddleware');
  //* REMOVE Token from cookie
  deleteCookieData('token');
  //* REMOVE User data from localstorage
  deleteLocalStorageData('user');
  next();
};

export { DataStorageMiddleware, DataRemovalMiddleware };

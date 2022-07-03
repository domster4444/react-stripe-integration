//! better call it isLoggedIn.ts file,
//* IT CHECKS IF USER IS LOGGED IN OR NOT by checking  if there is a token in cookie & if there is user in local storage
import { getDataByValue as getCookieDataByVal } from 'services/Cookie';
import { getDataByObj as getLocalStorageDataByObj } from 'services/LocalStorageService';
const isAuth: Function = (): boolean => {
  if (getCookieDataByVal('token') && getLocalStorageDataByObj('user')) {
    const user: any = getLocalStorageDataByObj('user');
    return user;
  }
  return false;
};

export default isAuth;

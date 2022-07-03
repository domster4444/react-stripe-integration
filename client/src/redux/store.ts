import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

//todo: for react persist
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

//reducers
import userInfoReducer from './features/userSlice';
import authReducer from './features/authSlice';
//rtk api
import { userAuthApi } from './api/auth/userAuthApi';
import { authenticationApi } from './api/auth/authenticationApi';

const reducers = combineReducers({
  //? Toolkit Reducers
  //add the authReducer to reducer object
  //todo: userPosts:postReducer
  userInfo: userInfoReducer,
  authInfo: authReducer,
  //?RTK Api
  //todo: [postApi.reducerPath]:postApi.reducer
  [userAuthApi.reducerPath]: userAuthApi.reducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,

  //? show dev tools only in development
  // devTools: process.env.NODE_ENV !== 'production',
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // reducer: {
  //   //? Toolkit Reducers
  //   //add the authReducer to reducer object
  //   //todo: userPosts:postReducer
  //   userInfo: userInfoReducer,
  //   //?RTK Api
  //   //todo: [postApi.reducerPath]:postApi.reducer
  //   [userAuthApi.reducerPath]: userAuthApi.reducer,
  //   //? show dev tools only in development
  //   devTools: process.env.NODE_ENV !== 'production',
  // },
  // middleware: (getDefaultMiddleware) => {
  // return getDefaultMiddleware().concat(pokemonApi.middleware);
  // },

  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

setupListeners(store.dispatch);

// concluding with the `RootState` and `AppDispatch` types from the store itself
//  means that they’ll correctly update as you add more state slices, API services or modify middleware settings.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

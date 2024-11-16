import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import themeReducer from './reducers/themeSlice';
import sidebarReducer from './reducers/sidebarSlice';
import { authApi } from './api/authApi';

const rootReducer = combineReducers({
  // redux
  auth: authReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  // rtk-query endpoints
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
  // .concat(
  //   productApi.middleware,
  // ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

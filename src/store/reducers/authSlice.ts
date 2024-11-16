// store/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';
import { IUser } from '@interfaces';

// Define the type for the initial state
interface AuthState {
  user: IUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") ?? 'null'),
  accessToken: localStorage.getItem('accessToken') || null,
  isAuthenticated: !!localStorage.getItem('accessToken'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
      if (action.payload) {
        localStorage.setItem('accessToken', action.payload);
      } else {
        localStorage.removeItem('accessToken');
      }
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    localLogout(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('theme');
      localStorage.removeItem('isSidebarOpen');
    },
  },
});

export const { setAccessToken, setUser, localLogout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUser = (state: RootState) => state.auth.user;
export const getAccessToken = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;

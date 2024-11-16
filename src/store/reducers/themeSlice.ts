import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';

// Define a type for the slice state
interface ThemeState {
  value: 'light' | 'dark';
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: localStorage.getItem("theme") === 'dark' ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
      localStorage.setItem("theme", state.value);
    },
  },
});

export const { toggleColorMode } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;

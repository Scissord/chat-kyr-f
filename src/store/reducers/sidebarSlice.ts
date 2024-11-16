import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';

// Define a type for the slice state
interface ThemeState {
  value: 0 | 1;
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: localStorage.getItem("isSidebarOpen") === "1" ? 1 : 0,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.value = state.value === 0 ? 1 : 0;
      localStorage.setItem('isSidebarOpen', state.value.toString());
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSidebar = (state: RootState) => state.sidebar.value;

export default sidebarSlice.reducer;

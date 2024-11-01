import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SwitchState = {
  checked: boolean;
};

const initialState: SwitchState = {
  checked: false,
};

export const switchSlice = createSlice({
  initialState: initialState,
  name: "switch",
  reducers: {
    initializeSwitch: (state, action) => {
      state.checked = action.payload;
    },
    toggleSwitch: (state, action: PayloadAction<boolean>) => {
      state.checked = action.payload;
    },
  },
});

export const { initializeSwitch, toggleSwitch } = switchSlice.actions;

export const switchReducer = switchSlice.reducer;

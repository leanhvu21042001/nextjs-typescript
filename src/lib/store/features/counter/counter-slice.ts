import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  initialState: initialState,
  name: "counter",
  reducers: {
    initializeCount: (state, payload) => {
      state.value = payload.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { initializeCount, increment, decrement, reset } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

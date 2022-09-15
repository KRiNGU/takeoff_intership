import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = 0;

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {},
});

export const {} = stateSlice.actions;

export default stateSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';

// Define the initial state using that type
const initialState: User | null = { email: '', login: '', password: '' };

export const stateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
  },
});

export const { getUser } = stateSlice.actions;

export default stateSlice.reducer;

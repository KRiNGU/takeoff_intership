import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';

export interface IUserState {
  id: number;
  email: string;
  login: string;
  password: string;
}

// Define the initial state using that type
const initialState: IUserState = { id: 0, email: '', login: '', password: '' };

export const stateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.password = action.payload.password;
    },
  },
});

export const { getUser } = stateSlice.actions;

export default stateSlice.reducer;

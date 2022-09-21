import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';

export interface IUserState {
  id: number;
  email: string;
  login: string;
  password: string;
}

const emptyUser: User = {
  id: 0,
  email: '',
  login: '',
  password: '',
};

// Define the initial state using that type
const initialState: IUserState = emptyUser as User;

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
    deleteUser: () => {
      return emptyUser;
    },
  },
});

export const { getUser, deleteUser } = stateSlice.actions;

export default stateSlice.reducer;

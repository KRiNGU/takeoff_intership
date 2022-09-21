import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';

export interface IUserState {
  user: User;
  error: string;
}

const emptyUser: User = {
  id: 0,
  email: '',
  login: '',
  password: '',
};

// Define the initial state using that type
const initialState: IUserState = { user: emptyUser, error: '' };

export const stateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = emptyUser;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { getUser, deleteUser, setError } = stateSlice.actions;

export default stateSlice.reducer;

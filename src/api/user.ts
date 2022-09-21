import { AxiosResponse } from 'axios';
import { CreateUserProps, GetUserProps, User } from '../models/user';
import axios from './main';

export const createUser = async (user: CreateUserProps) =>
  await axios.post('/users', user);

export const getUserByLogin = async ({
  login,
}: GetUserProps): Promise<AxiosResponse<User>> =>
  await axios.get(`/users?login=${login}`);

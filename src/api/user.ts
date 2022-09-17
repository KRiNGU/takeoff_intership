import { AxiosResponse } from 'axios';
import { User } from '../models/user';
import axios from './main';

export interface CreateUserProps {
  email: string;
  login: string;
  password: string;
}

export const createUser = async (user: CreateUserProps) =>
  await axios.post('/users', user);

export interface GetUserProps {
  login: string;
}

export const getUserByLogin = async ({
  login,
}: GetUserProps): Promise<AxiosResponse<User>> =>
  await axios.get(`/users?login=${login}`);

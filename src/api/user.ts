import { User } from '../models/user';
import axios from './main';

export const createUser = async (user: User) => await axios.post('/user', user);

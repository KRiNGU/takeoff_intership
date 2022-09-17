import { User } from '../../models/user';
import { TypeWithPayload } from '../types';

export interface GetUserSagaProps extends TypeWithPayload {
  payload: {
    user: User;
  };
}

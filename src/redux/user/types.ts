import { CreateUserProps, GetUserProps } from '../../api/user';
import { TypeWithPayload } from '../types';

export interface CreateUserSagaProps extends TypeWithPayload {
  payload: {
    user: CreateUserProps;
  };
}

export interface GetUserSagaProps extends TypeWithPayload {
  payload: GetUserProps & { password: string };
}

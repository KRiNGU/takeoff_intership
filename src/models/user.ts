import { TypeWithPayload } from '../redux/types';

export type User = {
  id: number;
  email: string;
  login: string;
  password: string;
};

// ---------------------------------------------------- API ----------------------------------------------------

export interface CreateUserProps {
  email: string;
  login: string;
  password: string;
}

export interface GetUserProps {
  login: string;
}

// ---------------------------------------------------- Sagas ----------------------------------------------------

export interface CreateUserSagaProps extends TypeWithPayload {
  payload: {
    user: CreateUserProps;
  };
}

export interface GetUserSagaProps extends TypeWithPayload {
  payload: GetUserProps & { password: string };
}

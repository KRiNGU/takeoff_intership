import { TypeWithPayload } from '../types';

export interface GetContactsByOwnerIdProps extends TypeWithPayload {
  payload: {
    ownerId: number;
  };
}

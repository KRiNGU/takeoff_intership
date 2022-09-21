import { CreateContactProps, UpdateContactProps } from '../../api/contact';
import { TypeWithPayload } from '../types';

export interface GetContactsByOwnerIdSliceProps extends TypeWithPayload {
  payload: {
    ownerId: number;
  };
}

export interface CreateContactSliceProps extends TypeWithPayload {
  payload: {
    contact: CreateContactProps;
  };
}

export interface UpdateContactSliceProps extends TypeWithPayload {
  payload: {
    contact: UpdateContactProps;
    id: number;
  };
}

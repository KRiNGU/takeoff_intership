import { CreateContactProps, UpdateContactProps } from '../../api/contact';
import { TypeWithPayload } from '../types';

export interface GetContactsByOwnerIdWorkerProps extends TypeWithPayload {
  payload: {
    ownerId: number;
  };
}

export interface CreateContactWorkerProps extends TypeWithPayload {
  payload: {
    contact: CreateContactProps;
  };
}

export interface UpdateContactWorkerProps extends TypeWithPayload {
  payload: {
    contact: UpdateContactProps;
    id: number;
  };
}

export interface DeleteContactWorkerProps extends TypeWithPayload {
  payload: {
    id: number;
  };
}

import { TypeWithPayload } from '../redux/types';

export type Contact = CreateContactProps & {
  id: number;
};

// ---------------------------------------------------- Forms ----------------------------------------------------

// Так как формы на создание и изменения полностью идентичны, типы и дефолтные значения копируют друг-друга.
// Это легко можно изменить, так как применения каждого из двух этих типов автономны и независимы друг от друга.

export type ICreateContactForm = {
  email: string;
  name: string;
  lastName: string;
  patronymic?: string;
  telegram?: string;
  phoneNumber?: string;
  country?: string;
};

export type IUpdateContactForm = ICreateContactForm;

export const createDefaultState = {
  email: '',
  name: '',
  lastName: '',
  patronymic: '',
  phoneNumber: '',
  telegram: '',
  country: '',
};

export const updateDefaultState = createDefaultState;

// ---------------------------------------------------- API ----------------------------------------------------

export interface GetContactsProps {
  ownerId: number;
  search?: string;
}

export interface CreateContactProps extends ICreateContactForm {
  ownerId: number;
}

export interface UpdateContactProps {
  email: string;
  name: string;
  lastName: string;
  patronymic?: string;
  telegram?: string;
  phoneNumber?: string;
  country?: string;
}

// ---------------------------------------------------- Sagas ----------------------------------------------------

export interface GetContactsByOwnerIdWorkerProps extends TypeWithPayload {
  payload: GetContactsProps;
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

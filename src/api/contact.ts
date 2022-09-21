import axios from './main';

// ---------------------------------------------------- REQUESTS ----------------------------------------------------

export const getContactsByOwnerIdAPI = async (ownerId: number) =>
  await axios.get(`/contacts?ownerId=${ownerId}`);

export const createContactAPI = async (contact: CreateContactProps) =>
  await axios.post(`/contacts`, contact);

export const updateContactAPI = async (
  id: number,
  contact: UpdateContactProps
) => await axios.patch(`/contacts/${id}`, contact);

export const deleteContactAPI = async (id: number) =>
  await axios.delete(`/contacts/${id}`);

// ---------------------------------------------------- TYPES ----------------------------------------------------

export interface CreateContactProps {
  ownerId: number;
  email: string;
  name: string;
  lastName: string;
  patronymic?: string;
  telegram?: string;
  phoneNumber?: string;
  country?: string;
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

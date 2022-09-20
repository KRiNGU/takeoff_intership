import axios from './main';

// ---------------------------------------------------- REQUESTS ----------------------------------------------------

export const getContactsByOwnerIdAPI = async (ownerId: number) =>
  await axios.get(`/contacts?ownerId=${ownerId}`);

export const createContactAPI = async (contact: CreateContactProps) =>
  await axios.post(`/contacts`, contact);

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

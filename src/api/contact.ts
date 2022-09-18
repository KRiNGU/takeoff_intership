import axios from './main';

export const getContactsByOwnerId = async (ownerId: number) =>
  await axios.get(`/contacts?ownerId=${ownerId}`);

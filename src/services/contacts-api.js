import authInstance from './auth-api';
// when we import authInstance we already have the token inside
// and we dont need to use setToken here in the ContactsAPI

export const getAllContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await authInstance.post('/contacts', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};

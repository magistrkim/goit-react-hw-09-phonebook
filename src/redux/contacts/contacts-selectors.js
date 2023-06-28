export const getAllContacts = ({ contacts }) => contacts.items;
export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normilizedFilter = filter.toLocaleLowerCase();
  const result = contacts.items.filter(({ name, phone }) => {
    return (
      name.toLowerCase().includes(normilizedFilter) ||
      phone.includes(normilizedFilter)
    );
  });
  return result;
};

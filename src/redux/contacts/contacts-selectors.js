export const getAllContacts = ({ contacts }) => contacts.items;
export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normilizedFilter = filter.toLocaleLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normilizedFilter) ||
      number.includes(normilizedFilter)
    );
  });
  return result;
};

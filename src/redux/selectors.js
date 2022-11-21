export const getContacts = state => state.contacts.items;

export const getStatusFilter = state => state.filter;

export const getVisibleContacts = state => {
  const normalizedFilter = state.filters.toLowerCase();

  return state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

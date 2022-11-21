export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const normalizedFilter = state.filter.toLowerCase();

  return state.contacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

console.log(getVisibleContacts);
// export const getTasks = state => state.tasks;

// export const getStatusFilter = state => state.filters.status;

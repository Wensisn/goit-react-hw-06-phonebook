import { createSlice } from '@reduxjs/toolkit';

// const filtersInitialState = {
//   status: conctacts.name,
// };

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

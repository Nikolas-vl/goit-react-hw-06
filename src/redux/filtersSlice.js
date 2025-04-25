import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {},
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;

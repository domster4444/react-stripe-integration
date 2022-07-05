import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const stripeSlice = createSlice({
  name: 'stripeSlice',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.data;
    },
    unsetData: (state) => {
      state.data = null;
    },
  },
});

export const { setData, unsetData } = stripeSlice.actions;

export default stripeSlice.reducer;

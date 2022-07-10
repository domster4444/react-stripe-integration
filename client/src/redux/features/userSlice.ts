import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  name: null,
  subscription: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.subscription = action.payload.subscription;
    },

    unsetUserInfo: (state) => {
      state.email = null;
      state.name = null;
      state.subscription = null;
    },
  },
});

// export actions
export const { setUserInfo, unsetUserInfo } = userSlice.actions;
// export reducer
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: { user: null },

  reducers: {
    loginn: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const selectUser = (state) => state.user.user;
export const { loginn, logout } = userSlice.actions;

export default userSlice.reducer;

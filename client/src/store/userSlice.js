import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: "",
  user: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = {};
    },
    me: (state, action) => {
      // my information
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

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
      const { accessToken, user } = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", accessToken);
      state.token = accessToken;
      state.user = user;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      state.token = "";
      state.user = {};
    },
  },
});

export const userActions = userSlice.actions;

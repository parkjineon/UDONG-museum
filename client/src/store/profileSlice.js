import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMe: false,
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    isMe: (state, action) => {
      state.isMe = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;

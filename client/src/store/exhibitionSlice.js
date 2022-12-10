import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  near: [],

  selectedEID: "",
};
export const exhibitionSlice = createSlice({
  name: "exhibition",
  initialState,
  reducers: {
    near: (state, action) => {
      // exhbitions near me
      state.near = action.payload;
    },

    selectedEID: (state, action) => {
      state.selectedEID = action.payload;
    },
  },
});

export const exhibitionActions = exhibitionSlice.actions;

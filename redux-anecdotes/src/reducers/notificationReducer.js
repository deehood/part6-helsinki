import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    normalNotification(state, action) {
      state = action.payload;
      return state;
    },

    removeNormalNotification(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { normalNotification, removeNormalNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;

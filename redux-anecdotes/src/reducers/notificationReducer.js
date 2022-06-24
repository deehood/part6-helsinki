import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

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

export const setNotification = (text, timeoutId, seconds) => {
  return (dispatch) => {
    dispatch(normalNotification(text));

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      dispatch(removeNormalNotification(null));
    }, seconds * 1000);
  };
};

export const { normalNotification, removeNormalNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;

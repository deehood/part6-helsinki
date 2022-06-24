import { createSlice } from "@reduxjs/toolkit";
const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notification(state, action) {
      state = action.payload;
      return state;
    },

    removeNotification(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const setNotification = (text, seconds) => {
  return (dispatch) => {
    dispatch(notification(text));

    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      dispatch(removeNotification(null));
    }, seconds * 1000);
  };
};

let timeoutID;

export const { notification, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

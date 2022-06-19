import { createSlice } from "@reduxjs/toolkit";

const initialState = "test";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    voteNotification(state, action) {
      state.notification.msg = `You voted for ${action.payload}`;
    },
  },
});

export default notificationSlice.reducer;

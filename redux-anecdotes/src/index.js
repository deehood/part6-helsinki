import React from "react";
import ReactDOM from "react-dom/client";
// import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import App from "./App";
import reducer from "./reducers/anecdoteReducer";

// const store = createStore(reducer);

const store = configureStore({
  reducer: {
    blogs: blo,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;

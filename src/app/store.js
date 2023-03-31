import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import productReducer from "../slice/productsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

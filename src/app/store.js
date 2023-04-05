import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "../slice/counterSlice";
import productReducer from "../slice/productsSlice";
import userReducer from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

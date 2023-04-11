import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "../slice/counterSlice";
import productReducer from "../slice/productsSlice";
import userReducer from "../slice/userSlice";
import categoryReducer from "../slice/categorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
    category: categoryReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "../slice/counterSlice";
import productReducer from "../slice/productsSlice";
import publishReducer from "../slice/publishSlice";
import categoryReducer from "../slice/categorySlice";
import supplierReducer from "../slice/supplieresSlice";

import userReducer from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
    publish: publishReducer,
    category: categoryReducer,
    supplier: supplierReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

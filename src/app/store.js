import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "../slice/counterSlice";
import productReducer from "../slice/productsSlice";
import publishReducer from "../slice/publishSlice";
import categoryReducer from "../slice/categorySlice";
import supplierReducer from "../slice/supplieresSlice";
import userReducer from "../slice/userSlice";
import formBookReducer from "../slice/formbooks";
import authorsReducer from "../slice/authors";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        product: productReducer,
        category: categoryReducer,
        publish: publishReducer,
        supplier: supplierReducer,
        formbooks: formBookReducer,
        authors: authorsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

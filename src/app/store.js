import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productReducer from "../slice/productsSlice";
import publishReducer from "../slice/publishSlice";
import categoryReducer from "../slice/categorySlice";
import supplierReducer from "../slice/supplieresSlice";
import userReducer from "../slice/userSlice";
import authorReducer from "../slice/authorSlice";
import formBookReducer from "../slice/formBookSlice";
import cartReducer from "../slice/cartSlice";
import infomationPageReducer from "../slice/infomationPage";
import categoryInformationReducer from "../slice/categoryInformation";
import voucherReducer from "../slice/vouchersSlice";
import commentReducer from "../slice/commentSlice";
import productSeriesReducer from "../slice/productseries";

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        category: categoryReducer,
        publish: publishReducer,
        supplier: supplierReducer,
        formBook: formBookReducer,
        author: authorReducer,
        cart: cartReducer,
        infomationPage: infomationPageReducer,
        categoryInformation: categoryInformationReducer,
        voucher: voucherReducer,
        comment: commentReducer,
        productSeries: productSeriesReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger);
    },
});

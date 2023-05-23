import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productSeriesApi from "../api/productseries";

export const getAllProductSeries = createAsyncThunk(
    "product-series/getAll",
    async () => {
        const response = await productSeriesApi.List();
        return response;
    }
);

export const getProductSeries = createAsyncThunk(
    "product-series/get",
    async (id) => {
        const respone = await productSeriesApi.Detail(id);
        return respone;
    }
);

export const AddNewProductSeries = createAsyncThunk(
    "product-series/add",
    async (data) => {
        await productSeriesApi.Add(data);
        const response = await productSeriesApi.List();
        return response;
    }
);

export const RemoveProductSeries = createAsyncThunk(
    "product-series/remove",
    async (id) => {
        console.log(id);
        await productSeriesApi.Remove(id);
        const respone = await productSeriesApi.List();
        return respone;
    }
);

export const UpdateProductSeries = createAsyncThunk(
    "product-series/update",
    async (data) => {
        try {
            await productSeriesApi.Update(data);
            const response = await productSeriesApi.List();
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const searchPro = createAsyncThunk(
    "product-series/search",
    async (data) => {
        const res = await productSeriesApi.SearchPro(data);
        return res;
    }
);

const initialState = {
    value: [],
    search: [],
};

export const productSeriesSlice = createSlice({
    name: "product-series",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProductSeries.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });

        builder.addCase(AddNewProductSeries.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(RemoveProductSeries.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(UpdateProductSeries.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(searchPro.fulfilled, (state, action) => {
            state.search = action.payload.data.data;
        });
    },
});

export default productSeriesSlice.reducer;

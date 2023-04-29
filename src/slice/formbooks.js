import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formBookApi from "../api/formbooks";

export const getAllFormBook = createAsyncThunk(
    "formbooks/getAllFormBook",
    async () => {
        const response = await formBookApi.formBookList();
        return response;
    }
);

export const getFormBook = createAsyncThunk("formbooks/get", async (id) => {
    console.log("id", id);
    const respone = await formBookApi.formBookDetail(id);
    return respone;
});

const initialState = {
    value: [],
    search: [],
};

export const formBookSlice = createSlice({
    name: "formbooks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllFormBook.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(getFormBook.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
    },
});

export default formBookSlice.reducer;

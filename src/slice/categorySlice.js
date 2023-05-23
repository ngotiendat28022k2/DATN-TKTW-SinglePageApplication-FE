import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../api/category";

export const getAllCategory = createAsyncThunk(
    "category/getAllCategory",
    async () => {
        const response = await categoryApi.List();
        return response;
    }
);

export const getCategory = createAsyncThunk("category/get", async (id) => {
    console.log("id", id);
    const respone = await categoryApi.Detail(id);
    return respone;
});

export const AddNewCategory = createAsyncThunk(
    "category/AddNewCategory",
    async (category) => {
        await categoryApi.Add(category);
        const response = categoryApi.List();
        return response;
    }
);

export const RemoveCategory = createAsyncThunk(
    "category/remove",
    async (id) => {
        console.log("id", id);
        await categoryApi.Remove(id);
        const respone = categoryApi.List();
        return respone;
    }
);

export const UpdateCategory = createAsyncThunk(
    "category/update",
    async (data) => {
        try {
            await categoryApi.Update(data);
            const response = await categoryApi.List();
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const searchCate = createAsyncThunk("category/search", async (data) => {
    const res = await categoryApi.SearchCate(data);
    return res;
});

const initialState = {
    value: [],
    search: [],
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategory.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });

        builder.addCase(AddNewCategory.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(RemoveCategory.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(UpdateCategory.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(searchCate.fulfilled, (state, action) => {
            state.search = action.payload.data.data;
        });
    },
});

export default categorySlice.reducer;

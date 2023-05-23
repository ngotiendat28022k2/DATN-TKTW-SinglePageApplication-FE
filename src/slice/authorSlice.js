import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authorApi from "../api/author";

export const getAllAuthor = createAsyncThunk("author/getAll", async () => {
    const response = await authorApi.AuthorList();
    return response;
});

export const getAuthor = createAsyncThunk("author/get", async (id) => {
    const respone = await authorApi.AuthorDetail(id);
    return respone;
});

export const AddNewAuthor = createAsyncThunk(
    "publish/AddNewPublish",
    async (data) => {
        await authorApi.AuthorAdd(data);
        const response = authorApi.AuthorList();
        return response;
    }
);

export const RemoveAuthor = createAsyncThunk("author/remove", async (id) => {
    await authorApi.RemoveAuthor(id);
    const respone = await authorApi.AuthorList();
    return respone;
});

export const UpdateAuthor = createAsyncThunk("author/update", async (data) => {
    try {
        await authorApi.AuthorUpdate(data);
        const response = await authorApi.AuthorList();
        return response;
    } catch (error) {
        throw error;
    }
});

export const searchAuthor = createAsyncThunk("author/search", async (data) => {
    const res = await authorApi.SearchAuthor(data);
    return res;
});

const initialState = {
    value: [],
    search: [],
};

export const authorSlice = createSlice({
    name: "author",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllAuthor.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });

        builder.addCase(AddNewAuthor.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(RemoveAuthor.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(UpdateAuthor.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(searchAuthor.fulfilled, (state, action) => {
            state.search = action.payload.data.data;
        });
    },
});

export default authorSlice.reducer;

import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formBookApi from "../api/formbook";

export const getAllFormBook = createAsyncThunk("author/getAll", async () => {
  const response = await formBookApi.FormBookList();
  return response;
});

export const getFormBook = createAsyncThunk("author/get", async (id) => {
  const respone = await formBookApi.FormBookDetail(id);
  return respone;
});

export const AddNewFormBook = createAsyncThunk(
  "publish/AddNewPublish",
  async (data) => {
    await formBookApi.FormBookAdd(data);
    const response = formBookApi.FormBookList();
    return response;
  }
);

export const RemoveFormBook = createAsyncThunk("author/remove", async (id) => {
  await formBookApi.RemoveFormBook(id);
  const respone = await formBookApi.FormBookList();
  return respone;
});

export const UpdateFormBook = createAsyncThunk(
  "author/update",
  async (data) => {
    try {
      await formBookApi.FormBookUpdate(data);
      const response = await formBookApi.FormBookList();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  value: [],
  search: [],
};

export const formBookSlice = createSlice({
  name: "formBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFormBook.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });

    builder.addCase(AddNewFormBook.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(RemoveFormBook.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(UpdateFormBook.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
  },
});

export default formBookSlice.reducer;

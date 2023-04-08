import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../api/category";

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const response = await categoryApi.CategoryList();
    return response;
  }
);

export const getCategory = createAsyncThunk("category/get", async (id) => {
  console.log("id", id);
  const respone = await categoryApi.CategoryDetail(id);
  return respone;
});

export const AddNewCategory = createAsyncThunk(
  "category/AddNewCategory",
  async (category) => {
     await categoryApi.CategoryAdd(category);
     const response = categoryApi.CategoryList()
    return response;
  }
);

export const RemoveCategory = createAsyncThunk("category/remove", async (id) => {
  console.log("id", id);
  await categoryApi.RemoveCategory(id);
  const respone = categoryApi.CategoryList();
  return respone;
});

export const UpdateCategory = createAsyncThunk(
  "category/update",
  async (data) => {
    try {
      await categoryApi.CategoryUpdate(data)
      const response = await categoryApi.CategoryList()
      return response
    } catch (error) {
      throw error
    }
  }
);


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
      state.value = action.payload.data.data;
      if (!state.value.length) return;
    });

    builder.addCase(AddNewCategory.fulfilled, (state, action) => {
      state.value = action.payload.data.data;
      // if (!state.value.length) return;
    });
    builder.addCase(RemoveCategory.fulfilled, (state, action) => {
      state.value = action.payload.data.data;
    });
    builder.addCase(UpdateCategory.fulfilled, (state, action) => {
      state.value = action.payload.data.data
    });
  },
});

export default categorySlice.reducer;

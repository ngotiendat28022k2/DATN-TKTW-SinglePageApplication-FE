import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authorsApi from "../api/authors";

export const getAllAuthor = createAsyncThunk(
    "authors/getAllAuthor",
    async () => {
        const response = await authorsApi.authorsList();
        return response;
    }
);

export const getAuthor = createAsyncThunk("authors/get", async (id) => {
    console.log("id", id);
    const respone = await authorsApi.authorDetail(id);
    return respone;
});

// export const AddNewCategory = createAsyncThunk(
//   "category/AddNewCategory",
//   async (category) => {
//     await categoryApi.Add(category);
//     const response = categoryApi.List();
//     return response;
//   }
// );

// export const RemoveCategory = createAsyncThunk(
//   "category/remove",
//   async (id) => {
//     console.log("id", id);
//     await categoryApi.Remove(id);
//     const respone = categoryApi.CategoryList();
//     return respone;
//   }
// );

// export const UpdateCategory = createAsyncThunk(
//   "category/update",
//   async (data) => {
//     try {
//       await categoryApi.Update(data);
//       const response = await categoryApi.CategoryList();
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

const initialState = {
    value: [],
    search: [],
};

export const authorsSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllAuthor.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(getAuthor.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        // builder.addCase(AddNewCategory.fulfilled, (state, action) => {
        //   state.value = action.payload.data;
        // });
        // builder.addCase(RemoveCategory.fulfilled, (state, action) => {
        //   state.value = action.payload.data;
        // });
        // builder.addCase(UpdateCategory.fulfilled, (state, action) => {
        //   state.value = action.payload.data;
        // });
    },
});

export default authorsSlice.reducer;

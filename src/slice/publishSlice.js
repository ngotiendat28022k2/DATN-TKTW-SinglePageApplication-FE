import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import publishApi from "../api/publishs";

export const getAllPublish = createAsyncThunk("publish/getAllPublish", async () => {
  const response = await publishApi.PublishList();
  return response;
});

export const getPublish = createAsyncThunk("publish/:id", async (id) => {
  console.log("id", id);
  const respone = await publishApi.PublishDetail(id);
  return respone;
})

export const AddNewPublish = createAsyncThunk("publish/AddNewPublish", async (publish) => {
  const response = await publishApi.PublishAdd(publish);
  return response;
});

export const RemovePublish = createAsyncThunk("publish/:id", async (id) => {
  console.log("id", id);
  const respone = await publishApi.RemovePublish(id);
  return respone;
})

const initialState = {
  value: [],
  search: [],
};

export const publishSlice = createSlice({
  name: "publish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPublish.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
    });
    // builder.addCase(getPublish.fulfilled, (state, action) => {
    //   state.value = action.payload;
    //   if (!state.value.length) return;
    // });
    builder.addCase(AddNewPublish.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
    });
    builder.addCase(RemovePublish.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
    })
  },
});

export default publishSlice.reducer;

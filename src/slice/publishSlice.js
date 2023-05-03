import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import publishApi from "../api/publishs";

export const getAllPublish = createAsyncThunk("publish/getAll", async () => {
  const response = await publishApi.PublishList();
  return response;
});

export const getPublish = createAsyncThunk("publish/get", async (id) => {
  console.log("id", id);
  const respone = await publishApi.PublishDetail(id);
  return respone;
});

export const AddNewPublish = createAsyncThunk(
  "publish/Add",
  async (publish) => {
    await publishApi.PublishAdd(publish);
    const response = publishApi.PublishList();
    return response;
  }
);

export const RemovePublish = createAsyncThunk("publish/remove", async (id) => {
  await publishApi.RemovePublish(id);
  const respone = publishApi.PublishList();
  return respone;
});

export const UpdatePublish = createAsyncThunk(
  "publish/update",
  async (data) => {
    try {
      await publishApi.PublishUpdate(data);
      const response = await publishApi.PublishList();
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

export const publishSlice = createSlice({
  name: "publish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPublish.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(AddNewPublish.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(RemovePublish.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(UpdatePublish.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
  },
});

export default publishSlice.reducer;

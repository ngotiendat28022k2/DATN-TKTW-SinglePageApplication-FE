import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentApi from "../api/comment";

export const getAllProductsWithComments = createAsyncThunk("comment/product-with-comment", async () => {
  const response = await commentApi.commentProductsList();
  return response;
});

export const getAllProductsWithReports = createAsyncThunk("comment/product-with-report", async () => {
  const response = await commentApi.reportProductsList();
  return response;
});

export const getAllComment = createAsyncThunk("comment/getAll", async (id) => {
  const response = await commentApi.commentList(id);
  return response;
});

export const getComment = createAsyncThunk("comment/get", async (id) => {
  const respone = await commentApi.commentDetail(id);
  return respone;
});

export const AddNewComment = createAsyncThunk("comment/add", async (data) => {
  const response = await commentApi.commentAdd(data);
  return response;
});

export const RemoveComment = createAsyncThunk("comment/remove", async (id) => {
  const response = await commentApi.RemoveComment(id);
  return response;
});

export const RemoveReport = createAsyncThunk("report/remove", async (id) => {
  const response = await commentApi.RemoveReport(id);
  return response;
});

export const UpdateComment = createAsyncThunk(
  "comment/update",
  async (data) => {
    try {
      await commentApi.commentUpdate(data);
      const response = await commentApi.commentList(data.product._id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const reportComment = createAsyncThunk(
  "reportComment/create",
  async (data) => {
    try {
      const response = await commentApi.ReportComment(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const isCommentReport = createAsyncThunk(
  "reportComment/check",
  async (data) => {
    try {
      const response = await commentApi.isCommentReport(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  value: [],
  search: [],
  commentReport: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsWithComments.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.products = action.payload.data;
      }
    });

    builder.addCase(getAllProductsWithReports.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.products = action.payload.data;
      }
    });

    builder.addCase(getAllComment.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.value = action.payload.data;
      }
    });

    builder.addCase(AddNewComment.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.value = action.payload.data;
      }
    });
    builder.addCase(UpdateComment.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.value = action.payload.data;
      }
    });
    builder.addCase(RemoveComment.fulfilled, (state, action) => {
      if (action.payload.success && action.payload.data) {
        state.value = state.value.filter(comment => comment._id !== action.payload.data._id);
      }
    });
    builder.addCase(RemoveReport.fulfilled, (state, action) => {
      if (action.payload.success && action.payload.data) {
        state.value = state.value.filter(comment => comment._id !== action.payload.data._id);
      }
    });
    
  },
});

export default commentSlice.reducer;

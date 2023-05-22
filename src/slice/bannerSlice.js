import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bannerApi from "../api/banner";

export const getAllBanner = createAsyncThunk("banner/getAll", async () => {
  const response = await bannerApi.BannerList();
  return response;
});

export const getBanner = createAsyncThunk("banner/get", async (id) => {
  const respone = await bannerApi.BannerDetail(id);
  return respone;
});

export const AddNewBanner = createAsyncThunk(
  "banner/AddNewBanner",
  async (data) => {
    await bannerApi.BannerAdd(data);
    const response = bannerApi.BannerList();
    return response;
  }
);

export const RemoveBanner = createAsyncThunk("banner/remove", async (id) => {
  await bannerApi.RemoveBanner(id);
  const respone = await bannerApi.BannerList();
  return respone;
});

export const UpdateBanner = createAsyncThunk("banner/update", async (data) => {
  try {
    await bannerApi.BannerUpdate(data);
    const response = await bannerApi.BannerList();
    return response;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  value: [],
  search: [],
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBanner.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });

    builder.addCase(AddNewBanner.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(RemoveBanner.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(UpdateBanner.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
  },
});

export default bannerSlice.reducer;

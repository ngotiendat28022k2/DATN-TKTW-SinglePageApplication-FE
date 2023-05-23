import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categogyInformationAPI from "../api/categogyInformation";

export const getAllCategoryInfor = createAsyncThunk(
    "categoryInfor/getAllCategoryInfor",
    async () => {
        const response = await categogyInformationAPI.List();
        return response;
    }
);

export const getCategoryInfor = createAsyncThunk(
    "categoryInfor/get",
    async (id) => {
        console.log("id", id);
        const respone = await categogyInformationAPI.Detail(id);
        return respone;
    }
);

export const AddNewCategoryInfor = createAsyncThunk(
    "categoryInfor/AddNewCategoryInfor",
    async (categoryInfor) => {
        await categogyInformationAPI.Add(categoryInfor);
        const response = categogyInformationAPI.List();
        return response;
    }
);

export const RemoveCategoryInfor = createAsyncThunk(
    "categoryInfor/remove",
    async (id) => {
        console.log("id", id);
        await categogyInformationAPI.Remove(id);
        const respone = categogyInformationAPI.List();
        return respone;
    }
);

export const UpdateCategoryInfor = createAsyncThunk(
    "categoryInfor/update",
    async (data) => {
        try {
            await categogyInformationAPI.Update(data);
            const response = await categogyInformationAPI.List();
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const searchCateInfor = createAsyncThunk(
    "category-information/search",
    async (data) => {
        const res = await categogyInformationAPI.SearchCateInfor(data);
        return res;
    }
);

const initialState = {
    value: [],
    search: [],
};

export const categoryInformation = createSlice({
    name: "categoryInformation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategoryInfor.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });

        builder.addCase(AddNewCategoryInfor.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(RemoveCategoryInfor.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(UpdateCategoryInfor.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(searchCateInfor.fulfilled, (state, action) => {
            state.search = action.payload.data.data;
        });
    },
});

export default categoryInformation.reducer;

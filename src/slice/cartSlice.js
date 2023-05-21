import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../api/cart";
import { v4 as uuidv4 } from "uuid";

export const saveCartToDatabase = createAsyncThunk(
  "cart/saveCartToDatabase",
  async (data) => {
    const respone = await cartApi.CartAdd(data);
    return respone;
  }
);

export const getCartToDatabase = createAsyncThunk(
  "cart/getCartToDatabase",
  async (id) => {
    const respone = await cartApi.CartList(id);
    return respone;
  }
);
export const readCartToDatabase = createAsyncThunk(
  "cart/readCartToDatabase",
  async (id) => {
    const respone = await cartApi.CartRead(id);
    return respone;
  }
);

export const updateCartToDatabase = createAsyncThunk(
  "cart/updateCartToDatabase",
  async (data) => {
    await cartApi.CartUpdate(data);
    const respone = await cartApi.CartList(data.user._id);
    return respone;
  }
);

export const removeCartToDatabase = createAsyncThunk(
  "cart/removeCartToDatabase",
  async (data) => {
    await cartApi.RemoveCart(data._id);
    const respone = await cartApi.CartList(data.user._id);
    return respone;
  }
);

const initialState = {
  value: [],
  search: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getToCart: (state) => {
      const cart = localStorage.getItem("cart");
      state.value = cart ? JSON.parse(cart) : [];
    },
    addToCart: (state, action) => {
      console.log("state.value", state.value);
      const { product, quantity } = action.payload;
      const existingItem = state.value.find(
        (item) => item.product._id === product._id
      );
      console.log("existingItem", existingItem);
      if (!existingItem) {
        const newItem = { _id: uuidv4(), ...action.payload };
        // console.log("newItem", newItem);
        state.value.push(newItem);
        action.payload = {
          successCode: true,
          message: "Product added to cart",
        };
      } else {
        if (existingItem.quantity < existingItem.product.quantity) {
          existingItem.quantity += quantity;
          action.payload = {
            successCode: true,
            message: "Product quantity update",
          };
        } else {
          action.payload = {
            successCode: false,
            message: "Product quantity is out",
          };
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeToCart: (state, action) => {
      const { _id } = action.payload;
      state.value = state.value.filter((item) => item._id !== _id);

      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    updatetoCart: (state, action) => {
      const { _id, quantity } = action.payload;
      const index = state.value.findIndex((item) => item._id === _id);
      console.log("index", index);
      if (quantity <= 0) {
        state.value = state.value.filter((item) => item._id !== _id);
      }
      if (index !== -1 && quantity > 0) {
        let deletedValue = state.value.splice(index, 1);
        state.value.splice(index, 0, action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    extraReducers: (builder) => {
      builder.addCase(saveCartToDatabase.fulfilled, (state, action) => {
        if (action.payload?.successCode) {
          state.value = action.payload.data;
        }
      });
      builder.addCase(getCartToDatabase.fulfilled, (state, action) => {
        if (action.payload?.successCode) {
          state.value = action.payload.data;
        }
      });
      builder.addCase(updateCartToDatabase.fulfilled, (state, action) => {
        if (action.payload?.successCode) {
          state.value = action.payload.data;
        }
      });
      builder.addCase(removeCartToDatabase.fulfilled, (state, action) => {
        if (action.payload?.successCode) {
          state.value = action.payload.data;
        }
      });
    },
  },
});

export const { getToCart, addToCart, removeToCart, updatetoCart } =
  cartSlice.actions;

export default cartSlice.reducer;

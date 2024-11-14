import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts as fetchProductsAPI,
  addProduct as addProductAPI,
} from "../api/api";

// Async thunk to fetch products from the backend
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await fetchProductsAPI();
    return products;
  }
);

// Async thunk to add a product
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData) => {
    const newProduct = await addProductAPI(productData); // API call to add product
    return newProduct; // Return the added product
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload); // Add the newly added product to the list
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

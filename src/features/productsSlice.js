import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts as fetchProductsAPI } from "../api/api"; // Import the fetchProducts function from the API file

// Async thunk to fetch products from the backend
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await fetchProductsAPI(); // Use the imported function to fetch data
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
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
      });
  },
});

export default productsSlice.reducer;

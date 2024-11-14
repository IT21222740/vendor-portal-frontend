// src/features/favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Get favorites from localStorage or set to empty array if none
const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const initialState = {
  items: storedFavorites, // Load initial state from localStorage
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const product = action.payload;
      if (!state.items.find((item) => item._id === product._id)) {
        state.items.push(product);
        localStorage.setItem("favorites", JSON.stringify(state.items)); // Save to localStorage
      }
    },
    removeFavorite: (state, action) => {
      const updatedItems = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = updatedItems;
      localStorage.setItem("favorites", JSON.stringify(state.items)); // Save to localStorage
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

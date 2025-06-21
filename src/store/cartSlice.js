import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, category } = action.payload;
      const existing = state.items.find(
        (item) => item.id === id && item.category === category
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    decrementQuantity: (state, action) => {
      const { id, category } = action.payload;
      const existing = state.items.find(
        (item) => item.id === id && item.category === category
      );
      if (existing) {
        existing.quantity -= 1;
        if (existing.quantity <= 0) {
          state.items = state.items.filter(
            (item) => !(item.id === id && item.category === category)
          );
        }
      }
    },
    removeFromCart: (state, action) => {
      const { id, category } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.category === category)
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

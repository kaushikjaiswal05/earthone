import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: 0,
  itemName: "",
  isCartMenuOpen: false,
  cartDetails: [
    {
      name: "Plant Monitor",
      description: "Charcoal 1-Pack",
      price: 2976.18,
      originalPrice: 3401.47,
      quantity: 1,
      image: "./images/monitor_aglaonema.webp",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = action.payload.quantity;
      state.itemName = action.payload.name;
    },
    toggleCartMenu: (state) => {
      state.isCartMenuOpen = !state.isCartMenuOpen;
    },
  },
});

export const { addItem, toggleCartMenu } = cartSlice.actions;

export default cartSlice.reducer;

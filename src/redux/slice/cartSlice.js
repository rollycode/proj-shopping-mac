import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { size: "M", color: 0 },
  reducers: {
    sizeSelect: (state, action) => {
      state.size = action.payload;
    },
    colorSelect: (state, action) => {
      state.color = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { sizeSelect, colorSelect } = cartSlice.actions;

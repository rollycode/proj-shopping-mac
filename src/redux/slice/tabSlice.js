import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab",
  initialState: { selectedTab: 0 },
  reducers: {
    tabSelected: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export default tabSlice.reducer;
export const { tabSelected } = tabSlice.actions;

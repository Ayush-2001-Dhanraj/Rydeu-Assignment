import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;

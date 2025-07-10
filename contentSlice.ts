import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "../api/newsApi";

export const getNewsContent = createAsyncThunk("content/getNews", async () => {
  const data = await fetchNews();
  return data;
});

const contentSlice = createSlice({
  name: "content",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewsContent.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getNewsContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contentSlice.reducer;

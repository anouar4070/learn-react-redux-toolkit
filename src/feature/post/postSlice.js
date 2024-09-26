import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const { data } = axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        console.log("pending", state.loading);
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          posts: payload,
          loading: false,
        };
      })
      .addCase(getPosts.rejected, () => {
        console.log("response rejected");
      }),
});

export default postSlice.reducer;

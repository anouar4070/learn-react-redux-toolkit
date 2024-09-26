import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice";
import postReducer from "../feature/post/postSlice"
const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export default store;

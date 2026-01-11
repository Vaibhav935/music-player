import { configureStore } from "@reduxjs/toolkit";
import songSlice from "../features/songSlice";
import toggleSlice from "../features/toggleSlice";
import authSlice from "../features/authSlice";
import likedSlice from "../features/likedSlice"

export const store = configureStore({
  reducer: {
    song: songSlice,
    toggle: toggleSlice,
    auth: authSlice,
    liked: likedSlice,
  },
});

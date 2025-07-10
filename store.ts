import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./thunks/contentSlice";
import movieReducer from "./thunks/movieSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    movies: movieReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

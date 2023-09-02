import { configureStore } from "@reduxjs/toolkit";
import { imgurApi } from "../api/imgur.api";

export const store = configureStore({
  reducer: {
    [imgurApi.reducerPath]: imgurApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imgurApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

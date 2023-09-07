import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { imgurApi } from "../api/imgur.api";
import { gallerySlice } from "./gallerySlice";

const persistConfig = {
  key: gallerySlice.name,
  storage,
};

const persistedReducer = persistReducer(persistConfig, gallerySlice.reducer);

export const store = configureStore({
  reducer: {
    [imgurApi.reducerPath]: imgurApi.reducer,
    [gallerySlice.name]: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(imgurApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

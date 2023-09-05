import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ImgurImage } from "../interfaces/imgur.interfaces";
import { imgurApi } from "../api/imgur.api";

const galleryEntityAdapter = createEntityAdapter<ImgurImage>({
  selectId: (image) => image.id,
});

export const gallerySelectors = galleryEntityAdapter.getSelectors();

const initialState = galleryEntityAdapter.getInitialState();

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: initialState,
  reducers: {
    resetAppState: () => initialState,
  },
  extraReducers: (builder) =>
    builder.addMatcher(
      imgurApi.endpoints.getGallery.matchFulfilled,
      (state, action) => {
        galleryEntityAdapter.addMany(state, action.payload);
      }
    ),
});

const { selectAll: selectAllImages } = galleryEntityAdapter.getSelectors();

export const { resetAppState } = gallerySlice.actions;

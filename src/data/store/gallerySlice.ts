import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { ImgurImage } from "../interfaces/imgur.interfaces";
import { imgurApi } from "../api/imgur.api";
import { RootState } from ".";

const galleryEntityAdapter = createEntityAdapter<ImgurImage>({
  selectId: (image) => image.id,
});

const initialGalleryState = galleryEntityAdapter.getInitialState();

const initialState = {
  data: initialGalleryState,
  page: 0,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    resetGalleryState: () => initialState,
  },
  extraReducers: (builder) =>
    builder.addMatcher(
      imgurApi.endpoints.getGallery.matchFulfilled,
      (state, action) => {
        console.log(action.payload);
        state.data = galleryEntityAdapter.upsertMany(
          state.data,
          action.payload
        );
        state.page = state.page + 1;
      }
    ),
});

export const selectGalleryState = createSelector(
  (state: RootState) => state,
  (state) => state.gallery
);

export const { selectAll: selectAllImages } = galleryEntityAdapter.getSelectors(
  (state: RootState) => state.gallery.data
);

export const { resetGalleryState } = gallerySlice.actions;

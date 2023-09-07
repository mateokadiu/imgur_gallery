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

interface GalleryState {
  data: ReturnType<typeof galleryEntityAdapter.getInitialState>;
  section: "hot" | "top" | "user";
  sort: "top" | "viral" | "time" | "rising";
  window: "day" | "week" | "month" | "year" | "all" | undefined;
  page: number;
  showViral: boolean;
}

const initialState: GalleryState = {
  data: initialGalleryState,
  page: 0,
  section: "user",
  sort: "time",
  window: "week",
  showViral: false,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    resetGalleryState: () => initialState,
    setGallerySection: (state, action) => {
      state.section = action.payload;
      state.page = 0;
      state.data = initialGalleryState;
    },
    setGallerySort: (state, action) => {
      state.sort = action.payload;
      state.page = 0;
      state.data = initialGalleryState;
    },
    setGalleryWindow: (state, action) => {
      state.window = action.payload;
      state.page = 0;
      state.data = initialGalleryState;
    },
    setGalleryShowViral: (state, action) => {
      state.showViral = action.payload;
      state.page = 0;
      state.data = initialGalleryState;
    },
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

export const {
  resetGalleryState,
  setGallerySection,
  setGalleryShowViral,
  setGallerySort,
  setGalleryWindow,
} = gallerySlice.actions;

import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { ImgurImage } from "../interfaces/imgur.interfaces";
import { imgurApi } from "../api/imgur.api";
import { RootState } from ".";

const galleryUserEntityAdapter = createEntityAdapter<ImgurImage>({
  selectId: (image) => image.id,
});

export const galleryUserSelectors = galleryUserEntityAdapter.getSelectors();

const initialStateUserSection = galleryUserEntityAdapter.getInitialState();

const galleryHotEntityAdapter = createEntityAdapter<ImgurImage>({
  selectId: (image) => image.id,
});

export const galleryHotSelectors = galleryHotEntityAdapter.getSelectors();

const initialStateHotSection = galleryHotEntityAdapter.getInitialState();

const galleryTopEntityAdapter = createEntityAdapter<ImgurImage>({
  selectId: (image) => image.id,
});

export const galleryTopSelectors = galleryTopEntityAdapter.getSelectors();

const initialStateTopSection = galleryTopEntityAdapter.getInitialState();

const initialState = {
  user: {
    data: initialStateUserSection,
    page: 0,
  },
  hot: {
    data: initialStateHotSection,
    page: 0,
  },
  top: {
    data: initialStateTopSection,
    page: 0,
  },
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    resetAppState: () => initialState,
    resetSection: (state, action) => {
      const section: "hot" | "top" | "user" = action.payload;
      state[section].data = initialState[section].data;
      state[section].page = initialState[section].page;
    },
  },
  extraReducers: (builder) =>
    builder.addMatcher(
      imgurApi.endpoints.getGallery.matchFulfilled,
      (state, action) => {
        console.log(action.payload);
        if (action.payload.section === "user") {
          galleryUserEntityAdapter.addMany(
            state.user.data,
            action.payload.data
          );
          state.user.page = state.user.page + 1;
        }
        if (action.payload.section === "hot") {
          galleryHotEntityAdapter.addMany(state.hot.data, action.payload.data);

          state.hot.page = state.hot.page + 1;
        }

        if (action.payload.section === "top") {
          galleryTopEntityAdapter.addMany(state.top.data, action.payload.data);
          state.top.page = state.top.page + 1;
        }
      }
    ),
});

export const { selectAll: selectAllImagesUser } =
  galleryUserEntityAdapter.getSelectors(
    (state: { gallery: ReturnType<typeof gallerySlice.reducer> }) =>
      state.gallery.user.data
  );

export const selectGalleryState = createSelector(
  (state: RootState) => state,
  (state) => state.gallery
);

export const selectPageBySection = (section: "user" | "hot" | "top") =>
  createSelector(selectGalleryState, (state) => state[section].page);

export const { selectAll: selectAllImagesHot } =
  galleryHotEntityAdapter.getSelectors(
    (state: { gallery: ReturnType<typeof gallerySlice.reducer> }) =>
      state.gallery.hot.data
  );

export const { selectAll: selectAllImagesTop } =
  galleryTopEntityAdapter.getSelectors(
    (state: { gallery: ReturnType<typeof gallerySlice.reducer> }) =>
      state.gallery.top.data
  );

export const { resetAppState, resetSection } = gallerySlice.actions;

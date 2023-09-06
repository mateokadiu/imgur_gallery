import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ImgurImage } from "../interfaces/imgur.interfaces";
import { imgurApi } from "../api/imgur.api";

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
  user: initialStateUserSection,
  hot: initialStateHotSection,
  top: initialStateTopSection,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    resetAppState: () => initialState,
    resetSection: (state, action) => {
      if (action.payload === "user") {
        state.user = initialStateUserSection;
      }
      if (action.payload === "hot") {
        state.hot = initialStateHotSection;
      }
      if (action.payload === "top") {
        state.top = initialStateTopSection;
      }
    },
  },
  extraReducers: (builder) =>
    builder.addMatcher(
      imgurApi.endpoints.getGallery.matchFulfilled,
      (state, action) => {
        console.log(action.payload);
        if (action.payload.section === "user")
          galleryUserEntityAdapter.addMany(state.user, action.payload.data);
        if (action.payload.section === "hot")
          galleryHotEntityAdapter.addMany(state.hot, action.payload.data);

        if (action.payload.section === "top")
          galleryTopEntityAdapter.addMany(state.top, action.payload.data);
      }
    ),
});

export const { selectAll: selectAllImagesUser } =
  galleryUserEntityAdapter.getSelectors(
    (state: { gallery: ReturnType<typeof gallerySlice.reducer> }) =>
      state.gallery.user
  );

export const { selectAll: selectAllImagesHot } =
  galleryHotEntityAdapter.getSelectors(
    (state: { gallery: ReturnType<typeof gallerySlice.reducer> }) =>
      state.gallery.hot
  );

export const { selectAll: selectAllImagesTop } =
  galleryTopEntityAdapter.getSelectors(
    (state: { gallery: ReturnType<typeof gallerySlice.reducer> }) =>
      state.gallery.top
  );

export const { resetAppState, resetSection } = gallerySlice.actions;

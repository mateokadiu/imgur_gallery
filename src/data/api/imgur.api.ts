import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GalleryOptions, ImgurImage } from "./types";

export const imgurApi = createApi({
  reducerPath: "imgurApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  }),
  tagTypes: ["Gallery"],
  endpoints: (builder) => ({
    getGallery: builder.query<ImgurImage[], GalleryOptions>({
      query: (options) =>
        `/gallery/${options.section}/${options.sort}/${options?.window}/${options?.page}`,
      transformResponse: (res: { data: ImgurImage[] }) => res.data,
      providesTags: ["Gallery"],
    }),
  }),
});

export const { useLazyGetGalleryQuery } = imgurApi;

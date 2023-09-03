import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GalleryOptions, ImgurImage } from "../interfaces/imgur.interfaces";

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
      query: (options) => ({
        url: `/gallery/${options.section}/${options.sort}/${options?.window}/${options?.page}`,
        method: "GET",
        params: {
          showViral: options.showViral,
        },
      }),
      transformResponse: (res: { data: ImgurImage[] }) => res.data,
      providesTags: ["Gallery"],
    }),
    getCoverImage: builder.query<any, string>({
      query: (id) => `/image/${id}`,
      transformResponse: (res: any) => res.data,
    }),
  }),
});

export const { useLazyGetGalleryQuery, useGetCoverImageQuery } = imgurApi;

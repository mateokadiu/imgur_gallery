import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imgurApi = createApi({
  reducerPath: "imgurApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  }),
  endpoints: (builder) => ({
    getGallery: builder.query<any, any>({
      query: (options) =>
        `/gallery/${options.section}/${options.sort}/${options?.window}/${options?.page}`,
    }),
  }),
});

export const { useLazyGetGalleryQuery } = imgurApi;

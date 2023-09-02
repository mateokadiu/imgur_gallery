import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imgurApi = createApi({
  reducerPath: "imgurApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    headers: {
      Authorization: `Client-ID ${process.env.CLIENT_ID}`,
    },
  }),
  endpoints: (builder) => ({
    getGallery: builder.query<any, any>({
      query: (options) =>
        `https://api.imgur.com/3/gallery/${options.section}/${options.sort}/${options?.window}/${options?.page}`,
    }),
  }),
});

import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: (data) => ({
        url: "/bikes",
        method: "GET",
        body: data,
      }),
    }),
    getRentalBikes: builder.query({
      query: (data) => ({
        url: "/rentals",
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useGetBikesQuery, useGetRentalBikesQuery } = userApi;

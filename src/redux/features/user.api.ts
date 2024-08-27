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
    createRental: builder.mutation({
      query: (data) => ({
        url: "/rentals",
        method: "POST",
        body: data,
      }),
    }),
    updateRentalStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/rentals/${id}`,
        method: "PATCH",
        body: { isReturned: status },
      }),
    }),
  }),
});

export const {
  useGetBikesQuery,
  useGetRentalBikesQuery,
  useCreateRentalMutation,
  useUpdateRentalStatusMutation,
} = userApi;

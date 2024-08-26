import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddBikes: builder.mutation({
      query: (data) => ({
        url: "/bikes",
        method: "POST",
        body: data,
      }),
    }),
    deleteBikes: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
    }),
    updateBikes: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bikes/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddBikesMutation,
  useDeleteBikesMutation,
  useUpdateBikesMutation,
} = userApi;

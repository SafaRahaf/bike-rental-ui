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
    getAllUsers: builder.query({
      query: (data) => ({
        url: `/users`,
        method: "GET",
        body: data,
      }),
    }),
    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/users/role/${userId}`,
        method: "PUT",
        body: { role },
      }),
    }),
  }),
});

export const {
  useAddBikesMutation,
  useDeleteBikesMutation,
  useUpdateBikesMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} = userApi;

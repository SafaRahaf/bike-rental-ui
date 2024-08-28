import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    getProfileInfo: builder.query({
      query: (data) => ({
        url: "/users/me",
        method: "GET",
        body: data,
      }),
    }),
    updateProfileInfo: builder.mutation({
      query: (data) => ({
        url: "/users/me",
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileInfoQuery,
  useUpdateProfileInfoMutation,
  useDeleteUserMutation,
} = authApi;

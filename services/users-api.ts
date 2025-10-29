// Import necessary modules and functions
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base"; // Assuming 'base' is your custom base query

// Create a Redux Toolkit Query API using createApi
export const userApi = createApi({
  reducerPath: "userApi", // Name of the reducer path for this API slice
  baseQuery: baseQuery, // Custom base query for making HTTP requests
  tagTypes: ["USER"],
  endpoints: (builder) => ({

    updateUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

// Export the generated query hooks for the defined endpoints
export const {
  useUpdateUserMutation
} = userApi;

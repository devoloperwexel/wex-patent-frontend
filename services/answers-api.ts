// Import necessary modules and functions
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base"; // Assuming 'base' is your custom base query

// Create a Redux Toolkit Query API using createApi
export const answerApi = createApi({
  reducerPath: "answerApi", // Name of the reducer path for this API slice
  baseQuery: baseQuery, // Custom base query for making HTTP requests
  tagTypes: ["ANSWER"],
  endpoints: (builder) => ({

    updateAnswer: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/answers`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ANSWER"],
    }),
  }),
});

// Export the generated query hooks for the defined endpoints
export const {
  useUpdateAnswerMutation
} = answerApi;

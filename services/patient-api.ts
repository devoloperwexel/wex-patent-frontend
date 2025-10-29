// Import necessary modules and functions
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base"; // Assuming 'base' is your custom base query

// Create a Redux Toolkit Query API using createApi
export const patientApiApi = createApi({
  reducerPath: "patientApi", // Name of the reducer path for this API slice
  baseQuery: baseQuery, // Custom base query for making HTTP requests
  tagTypes: ["PATIENT"],
  endpoints: (builder) => ({

    createPatient: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/patient-details`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["PATIENT"],
    }),
    updatePatient: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/patient-details`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["PATIENT"],
    }),
  }),
});

// Export the generated query hooks for the defined endpoints
export const {
  useCreatePatientMutation,
  useUpdatePatientMutation
} = patientApiApi;

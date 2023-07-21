import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {REACT_APP_API_BASE} from "./constants";
import {IPost} from "../models/post";

export const postApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery(
        {baseUrl: REACT_APP_API_BASE}),
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => 'posts',
        }),
    }),
})

export const { useGetPostsQuery } = postApi;

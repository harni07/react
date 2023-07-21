import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "./slices";
import {postApi} from "../services/post";
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

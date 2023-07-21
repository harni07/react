import {createSlice} from "@reduxjs/toolkit";

export interface ICounterState {
    values: number[]
}

export const initialState: ICounterState = {
    values: [0,0],
}

export interface  ICounterAction {
    payload: {
        index: number;
    }
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: ICounterAction) => {
            const newCounter = [...state.values];
            newCounter[action.payload.index] += 1;
            state.values = newCounter;
        },
        decrement: (state, action: ICounterAction) => {
            const newCounter = [...state.values];
            newCounter[action.payload.index] -= 1;
            state.values = newCounter;
        }
    },
})


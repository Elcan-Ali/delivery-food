import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meals: [],
    restaurants: []
}

export const mainApiSlice = createSlice({
    name: "mainApi",
    initialState,
    reducers: {
        Init: (_, action) => {
            return { meals: action.payload.meals, restaurants: action.payload.restaurants }
        }
    }
})


export const { Init } = mainApiSlice.actions

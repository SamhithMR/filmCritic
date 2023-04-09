import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        genres: {},
        API_KEY : ""
    },
    reducers: {
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
        getApi:(state,action) =>{
            state.API_KEY = action.payload
        }
    },
});

// Action creators are generated for each case reducer function
export const { getApi, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
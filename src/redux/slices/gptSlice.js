import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptLimitModal: false,
        movieNames: null,
        movieResult: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        toggleGptLimitModal: (state) => {
            state.gptLimitModal = !state.gptLimitModal;
        },
        addGptMovies: (state, action) => {
            const {movieNames, movieResult} = action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResult;
        }
    }
});

export const {
    toggleGptSearchView,
    toggleGptLimitModal,
    addGptMovies
} = gptSlice.actions;

export default gptSlice.reducer;
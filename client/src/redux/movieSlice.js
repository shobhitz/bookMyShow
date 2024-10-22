import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'loaders',
    initialState: {
        loading: false
    },
    reducers: {
        showLoading: (state) => {
            state.loading = true;
        },
        hideLoading: (state) => {
            state.loading = false;
        },
    }
})

export const {showLoading, hideLoading} = movieSlice.actions;
export default movieSlice.reducers;
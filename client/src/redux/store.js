import { configureStore } from "@reduxjs/toolkit";
import LoaderReducer from './loaderSlice';
import UserReducer from './userSlice';

const store = configureStore({
    reducer: {
        loaders: LoaderReducer,
        users: UserReducer
    }
})

export default store;
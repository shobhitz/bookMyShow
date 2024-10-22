import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        name: "",
        role: "user"
    },
    reducers: {
        setUser: (state) => {

        },
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducers;
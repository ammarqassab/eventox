import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{data: null,middleware:null},
    reducers:{
        addAuth: (state, action) => {
            state.data = action.payload;
        },
        addMiddleware: (state, action) => {
            state.middleware = action.payload;
        }
    }
});

export const {addAuth, addMiddleware} = authSlice.actions;

export default authSlice.reducer;

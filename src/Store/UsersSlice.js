import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name:"users",
    initialState:{data: null},
    reducers:{
        addusers: (state, action) => {
            state.data = action.payload;
        },
        deleteusers: (state, action) => {
            state.data.splice(action.payload, 1);
        }
    }
});

export const {addusers, deleteusers} = usersSlice.actions;

export default usersSlice.reducer;

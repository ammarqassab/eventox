import { createSlice } from "@reduxjs/toolkit";

export const helperSlice = createSlice({
    name:"helper",
    initialState:{data: null, userhelper:null, posthelper:null, commenthelper:null},
    reducers:{
        addhelper: (state, action) => {
            state.data = action.payload;
        },
        deletehelper: (state, action) => {
            state.data.splice(action.payload, 1);
        },
        adduserhelper: (state, action) => {
            state.userhelper = action.payload;
        },
        deleteuserhelper: (state, action) => {
            state.userhelper.splice(action.payload, 1);
        },
        addposthelper: (state, action) => {
            state.posthelper = action.payload;
        },
        deleteposthelper: (state, action) => {
            state.posthelper.splice(action.payload, 1);
        },
        addcommenthelper: (state, action) => {
            state.commenthelper = action.payload;
        },
        deletecommenthelper: (state, action) => {
            state.commenthelper.splice(action.payload, 1);
        },
    }
});

export const {addhelper, deletehelper, adduserhelper, deleteuserhelper, addposthelper, deleteposthelper, addcommenthelper, deletecommenthelper} = helperSlice.actions;

export default helperSlice.reducer;

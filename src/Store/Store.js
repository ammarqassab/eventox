import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { helperSlice } from "./HelperSlice";
// import { usersSlice } from "./UsersSlice";

const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        helper: helperSlice.reducer,
        // users: usersSlice.reducer,
    },
});

export default store ;

import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./app/features/userSlice";

const store = configureStore({
    reducer : {
        userReducer : UserReducer
    }
})

export default store;
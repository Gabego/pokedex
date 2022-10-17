import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/userName.Slice'

export default configureStore({
    reducer: {
        userName
    }
})
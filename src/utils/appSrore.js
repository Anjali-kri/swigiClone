import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/CartSlice"
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;
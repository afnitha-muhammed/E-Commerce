import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";


const store = configureStore({
    reducer:{
        wishlistreducer:wishlistSlice,
        cartreducer:cartSlice
   
    }
})

export default store
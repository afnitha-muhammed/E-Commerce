import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name:"cartslice",
    initialState:[],
    reducers: {
        addToCart:(state, actions)=>{
                state.push(actions.payload)
        },
        removeFRomCart:(state, actions)=>{
              return  state.filter(item=>item.id!=actions.payload)
        },
        emptyCart:(state)=>{
            return state = []
        }
    }
})

export const {addToCart, removeFRomCart , emptyCart} = cartSlice.actions

export default cartSlice.reducer
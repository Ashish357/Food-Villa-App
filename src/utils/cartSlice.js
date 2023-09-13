import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItemCount: 0,
    },
    reducers: {
        addItem: (state,action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            itemInCart ? itemInCart.quantity++ : state.items.push({...action.payload, quantity : 1})
            state.totalItemCount++;
            // state.items.push(action.payload);
            // console.log("state.items:", state.items);
        },
        decreamentItem: (state,action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if(!itemInCart) return;
            if(itemInCart.quantity === 1){
                state.items = state.items.filter(item=> item.id != action.payload.id);
            }
            else{
                itemInCart.quantity--;
            }
            state.totalItemCount--;
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            state.items = state.items.filter((item) => item.id !== itemToRemove.id);
            state.totalItemCount--;
            // console.log("state.items:", state.items);
        },
        clearCart: (state) => {
        state.items = [];
        state.totalItemCount = 0;
        },
    },
})

export const { addItem, decreamentItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer
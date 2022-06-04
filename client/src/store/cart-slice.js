import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        addItem(state, action) {
            const existingItem = state.items.find((item) => item.id === action.payload.id)
            if (existingItem) {
                existingItem.totalQuantity += 1
                existingItem.totalPrice += existingItem.price
            } else {
                const newItem = action.payload
                state.items.push({
                    ...newItem, totalQuantity: 1, totalPrice: newItem.price
                })
            }

        },
        removeItem(state, action) {
            const existingItem = state.items.find((item) => item.id === action.payload)
            if (existingItem.totalQuantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload)
            } else {
                existingItem.totalQuantity -= 1
                existingItem.totalPrice -= existingItem.price
            }
        },
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;
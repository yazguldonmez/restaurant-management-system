import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes


            if (state.cartItems.some(cartItem => cartItem.id === action.payload.id && cartItem.dough_types[0]?.id === action.payload.dough_types[0]?.id && cartItem.defaultVariant.size_id === action.payload.defaultVariant.size_id)) {
                const item = state.cartItems.find(cartItem => cartItem.id === action.payload.id && cartItem.dough_types[0]?.id === action.payload.dough_types[0]?.id && cartItem.defaultVariant.size_id === action.payload.defaultVariant.size_id)
                item.quantity += 1
                item.totalPrice = item.defaultVariant.price * item.quantity
            } else {
                state.cartItems.push(action.payload)
            }
            // console.log('cartItems: ', JSON.parse(JSON.stringify(state)))
        },
        removeItem: (state, action) => {
            // console.log('cartItems: ', JSON.parse(JSON.stringify(state.cartItems)))
            const index = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id && cartItem.dough_types[0]?.id === action.payload.dough_types[0]?.id && cartItem.defaultVariant.size_id === action.payload.defaultVariant.size_id)
            state.cartItems.splice(index, 1)
        },
        clearCart: (state) => {
            state.cartItems = []
        },
    },
})

export const { addToCart, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
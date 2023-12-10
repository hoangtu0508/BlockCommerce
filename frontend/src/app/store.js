import { configureStore } from '@reduxjs/toolkit';
import metamaskReducer from '../features/metamask/metamaskSlice'
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/category/categorySlice'
import collectionReducer from '../features/collection/collectionSlice';
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        metamask: metamaskReducer,
        auth: authReducer,
        category: categoryReducer,
        collection: collectionReducer,
        product: productReducer,
        cart: cartReducer,
    },
});